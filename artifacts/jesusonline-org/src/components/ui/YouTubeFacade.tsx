import { useState } from "react";

interface Props {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeFacade({ videoId, title, className = "" }: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className={`w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div
      className={`yt-facade w-full h-full ${className}`}
      onClick={() => setActive(true)}
      role="button"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="eager"
        decoding="async"
      />
      <div className="yt-play">
        <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="48" rx="12" fill="#FF0000" />
          <polygon points="26,14 52,24 26,34" fill="white" />
        </svg>
      </div>
    </div>
  );
}
