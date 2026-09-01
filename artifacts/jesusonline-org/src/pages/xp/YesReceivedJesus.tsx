import { useEffect } from "react";
import { SEO } from "@/components/ui/SEO";
import { trackConversion } from "@/lib/track";
import {
  XPPageLayout,
  XPHeroSection,
  XPBookCard,
  XPVideoSection,
  XPQuestionsSection,
  XPContactSection,
} from "@/components/xp/NextStepsLayout";

const FOLLOW_UPS = [
  { label: "How do I know this is real?", href: "https://app.jesusonline.com/post/88421-how-do-i-know-this-is-real" },
  { label: "I'm afraid...", href: "https://app.jesusonline.com/post/88425-im-afraid" },
  { label: "How should I handle my current relationships?", href: "https://app.jesusonline.com/post/88424-how-should-i-handle-my-current-relationships" },
  { label: "What do I do now?", href: "https://app.jesusonline.com/post/88422-what-do-i-do-now" },
  { label: "I have questions about church", href: "https://app.jesusonline.com/post/88426-i-have-questions-about-church" },
  { label: "I want to know Jesus more", href: "https://app.jesusonline.com/post/88423-i-want-to-know-jesus-more" },
  { label: "More questions?", href: "https://app.jesusonline.com/post/88427-more-questions" },
];

export default function YesReceivedJesus() {
  useEffect(() => {
    trackConversion("yes_received_jesus");
  }, []);

  return (
    <>
      <SEO title="Something Real Has Begun" description="You just took a step of faith. What happened is real." path="/xp/yes-i-received-jesus" noindex />

      <XPPageLayout>
        <XPHeroSection
          title="Something Real Has Begun"
          description="You just took a step of faith. What happened is real. These eight short readings will help you see what this new life looks like in ordinary days—clearly, gently, and at your own pace."
          delay="d-100"
        />

        <XPBookCard
          subtext="8 short readings · start in order, or start where you need to begin"
          delay="d-200"
        />

        <XPVideoSection delay="d-300" />

        <XPQuestionsSection
          title="You're Not the Only One Wondering…"
          links={FOLLOW_UPS}
          delay="d-400"
        />

        <XPContactSection delay="d-500" showExtraComfort={true} />
      </XPPageLayout>
    </>
  );
}
