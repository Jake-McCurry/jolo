import { SEO } from "@/components/ui/SEO";
import {
  XPPageLayout,
  XPHeroSection,
  XPBookCard,
  XPQuestionsSection,
  XPContactSection,
} from "@/components/xp/NextStepsLayout";

const COMMON_NEXT_STEPS = [
  { label: "I have questions about what I heard", href: "https://follow.jesusonline.com/more-no-decision-i-have-questions-about-what-i-heard?journey=did-not-pray&entry=jesusonline.org&from=xp&step=faq" },
  { label: "I’d like to understand the Christian message more clearly", href: "https://follow.jesusonline.com/more-no-decision-id-like-to-understand-the-christian-message-more-clearly?journey=did-not-pray&entry=jesusonline.org&from=xp&step=faq" },
  { label: "I already follow Jesus and want to go deeper", href: "https://follow.jesusonline.com/more-no-decision-i-already-follow-jesus-and-want-to-go-deeper?journey=did-not-pray&entry=jesusonline.org&from=xp&step=faq" },
  { label: "I want to help someone else explore these things", href: "https://follow.jesusonline.com/more-no-decision-i-want-to-help-someone-else-explore-these-things?journey=did-not-pray&entry=jesusonline.org&from=xp&step=faq" },
  { label: "More options?", href: "https://follow.jesusonline.com/more-no-decision-more-options?journey=did-not-pray&entry=jesusonline.org&from=xp&step=faq" },
];

export default function NoDidntPray() {
  return (
    <>
      <SEO title="Thanks for Watching" description="Whether you are still considering Jesus or have questions, you are welcome here." path="/xp/no-i-didnt-pray" noindex />

      <XPPageLayout>
        <XPHeroSection
          title="Thanks for Watching"
          description="We’re glad you took the time to hear this message. Whether you are still considering Jesus, have questions, or already walk with Him, you are welcome here. If you would like to explore further, this short guide offers a clear and steady next step—at whatever pace feels right for you."
          delay="d-100"
        />

        <XPBookCard
          subtext="8 short readings · written in order · start anywhere"
          delay="d-200"
        />

        <XPQuestionsSection
          title="Common Next Steps"
          links={COMMON_NEXT_STEPS}
          delay="d-300"
        />

        <XPContactSection delay="d-400" />
      </XPPageLayout>
    </>
  );
}
