export function WatchOnYouTubeBadge() {
  return (
    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/70 text-white text-[11px] font-semibold px-2 py-1 rounded pointer-events-none select-none">
      <span>Watch on</span>
      <span className="flex items-center gap-1">
        <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
          <rect width="14" height="10" rx="2" fill="#FF0000" />
          <polygon points="5.5,2.5 5.5,7.5 10,5" fill="white" />
        </svg>
        <span className="font-bold tracking-tight">YouTube</span>
      </span>
    </div>
  );
}
