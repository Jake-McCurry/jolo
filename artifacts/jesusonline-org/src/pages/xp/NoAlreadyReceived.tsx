import { SEO } from "@/components/ui/SEO";
import {
  XPPageLayout,
  XPHeroSection,
  XPBookCard,
  XPVideoSection,
  XPQuestionsSection,
  XPContactSection,
} from "@/components/xp/NextStepsLayout";

const WAYS_TO_USE = [
  { label: "Refresh the foundations of your own walk with Jesus", href: "https://follow.jesusonline.com/" },
  { label: "Find clear language for conversations with others", href: "https://follow.jesusonline.com/" },
  { label: "Help someone who is new in their faith", href: "https://follow.jesusonline.com/" },
  { label: "Revisit a specific area (identity, prayer, Scripture, purpose)", href: "https://follow.jesusonline.com/" },
  { label: "More options?", href: "https://follow.jesusonline.com/" },
];

export default function NoAlreadyReceived() {
  return (
    <>
      <SEO title="Good to See You Here" description="Keep growing or be refreshed in the basics of walking with Him." path="/xp/no-already-received" noindex />

      <XPPageLayout>
        <XPHeroSection
          title="Good to See You Here"
          description="Thank you for watching. Since you already walk with Jesus, we’re glad these truths could encourage you today. If you would like to keep growing or simply be refreshed in the basics of walking with Him, this short guide is a clear and steady place to continue."
          delay="d-100"
        />

        <XPBookCard
          subtext="8 short readings · written in order · start anywhere"
          delay="d-200"
        />

        <XPVideoSection delay="d-300" />

        <XPQuestionsSection
          title="Ways You Might Use These Resources"
          links={WAYS_TO_USE}
          delay="d-400"
        />

        <XPContactSection delay="d-500" />
      </XPPageLayout>
    </>
  );
}
