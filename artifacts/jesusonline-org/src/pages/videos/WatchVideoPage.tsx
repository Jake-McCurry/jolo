import { Link } from "wouter";
import { SEO } from "@/components/ui/SEO";
import { WatchOnYouTubeBadge } from "@/components/ui/WatchOnYouTubeBadge";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";

interface WatchVideoPageProps {
  title: string;
  description: string;
  path: string;
  videoId: string;
}

export function WatchVideoPage({
  title,
  description,
  path,
  videoId,
}: WatchVideoPageProps) {
  return (
    <>
      <SEO title={title} description={description} path={path} />

      <section className="min-h-[calc(100dvh-56px)] bg-gray-50 py-12 sm:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              JesusOnline video
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              {description}
            </p>
          </div>

          <div
            className="relative mt-9 aspect-video overflow-hidden rounded-xl bg-black shadow-lg"
            data-testid={`video-${videoId}`}
          >
            <YouTubeFacade videoId={videoId} title={`${title} — JesusOnline`} />
            <WatchOnYouTubeBadge />
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
              data-testid="link-all-videos"
            >
              Explore more videos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
