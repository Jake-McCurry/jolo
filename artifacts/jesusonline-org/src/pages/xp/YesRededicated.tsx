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

const FEELINGS_QUESTIONS = [
  { label: "How do I start walking closely with Him again?", href: "https://follow.jesusonline.com/more-returning-how-do-i-start-walking-closely-with-him-again" },
  { label: "I feel ashamed or distant…", href: "https://follow.jesusonline.com/more-returning-i-feel-ashamed-or-distant" },
  { label: "How should I handle the relationships and patterns I left behind?", href: "https://follow.jesusonline.com/more-returning-how-should-i-handle-the-relationships-and-patterns-i-left-behind" },
  { label: "What practical steps can I take right now?", href: "https://follow.jesusonline.com/more-returning-what-practical-steps-can-i-take-right-now" },
  { label: "I have questions about getting connected again", href: "https://follow.jesusonline.com/more-returning-i-have-questions-about-getting-connected-again" },
  { label: "I want to know Jesus more deeply", href: "https://follow.jesusonline.com/more-returning-i-want-to-know-jesus-more-deeply" },
  { label: "More questions?", href: "https://follow.jesusonline.com/more-returning-other-questions" },
];

export default function YesRededicated() {
  useEffect(() => {
    trackConversion("yes_rededicated");
  }, []);

  return (
    <>
      <SEO title="Welcome Back" description="Turning toward Jesus again matters. He receives you with open arms." path="/xp/yes-i-rededicated" noindex />

      <XPPageLayout>
        <XPHeroSection
          title="Welcome Back"
          description="You just took a meaningful step. Turning toward Jesus again matters. What you did is real, and He receives you with open arms. These simple next steps will help you renew your walk with Him and move forward with clarity and confidence."
          delay="d-100"
        />

        <XPBookCard
          subtext="8 short readings · written in order · start anywhere"
          delay="d-200"
        />

        <XPVideoSection delay="d-300" />

        <XPQuestionsSection
          title="You're Not the Only One Feeling This Way…"
          links={FEELINGS_QUESTIONS}
          delay="d-400"
        />

        <XPContactSection delay="d-500" showExtraComfort={true} />
      </XPPageLayout>
    </>
  );
}
