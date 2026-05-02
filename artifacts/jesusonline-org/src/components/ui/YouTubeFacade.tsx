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
    <button
      type="button"
      className={`yt-facade w-full h-full border-0 p-0 ${className}`}
      onClick={() => setActive(true)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(true)}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="yt-play">
        <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="48" rx="12" fill="#FF0000" />
          <polygon points="26,14 52,24 26,34" fill="white" />
        </svg>
      </div>
    </button>
  );
}
