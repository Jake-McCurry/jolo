import { SEO } from "@/components/ui/SEO";
import { XPContent, type XPType } from "@/features/follow-xp-main-content/react/XPContent";
import content from "@/features/follow-xp-main-content/content/xp-content.json";
import guideCover from "@/features/follow-xp-main-content/assets/guide-cover.png";

export function FollowXPPage({ type, path }: { type: XPType; path: string }) {
  const page = content[type];

  return (
    <>
      <SEO title={page.title} description={page.intro[0]} path={path} noindex />
      <div className="bg-[#fffdfb]">
        <XPContent
          type={type}
          resourceBaseUrl="https://follow.jesusonline.com"
          guideCoverSrc={guideCover}
          messageHref="https://follow.jesusonline.com/message"
          entry="jesusonline.org"
        />
      </div>
    </>
  );
}
