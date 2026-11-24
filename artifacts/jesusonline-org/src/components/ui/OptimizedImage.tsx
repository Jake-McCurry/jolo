import type { ImgHTMLAttributes } from "react";

const thumbnails: Record<string, string> = {
  "/thumb-gift-of-heaven.jpg": "thumb-gift-of-heaven",
  "/thumb-resurrection.jpg": "thumb-resurrection",
};

export function OptimizedImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const thumbnail = props.src && thumbnails[props.src];
  if (!thumbnail) return <img {...props} />;
  const base = import.meta.env.BASE_URL;
  return (
    <picture className="contents">
      <source
        type="image/webp"
        srcSet={`${base}optimized/${thumbnail}-400.webp 400w, ${base}optimized/${thumbnail}-800.webp 800w`}
        sizes="(max-width: 640px) calc(100vw - 32px), 800px"
      />
      <img {...props} />
    </picture>
  );
}
