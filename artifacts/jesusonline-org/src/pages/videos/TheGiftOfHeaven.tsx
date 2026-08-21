import { WatchVideoPage, type VideoResponseOption } from "./WatchVideoPage";

const RESPONSE_OPTIONS: VideoResponseOption[] = [
  {
    label: "No, I didn't pray the prayer.",
    href: "/xp/no-i-didnt-pray",
    testid: "survey-no-didnt-pray",
  },
  {
    label: "Yes, I received Jesus into my life.",
    href: "/xp/yes-i-received-jesus",
    testid: "survey-yes-received-jesus",
    extraClass: "gtm-conversion-received-christ",
  },
  {
    label: "Yes, I rededicated my life to Jesus.",
    href: "/xp/yes-i-rededicated",
    testid: "survey-yes-rededicated",
  },
  {
    label: "No, I have already received Jesus in my life.",
    href: "/xp/no-already-received",
    testid: "survey-no-already-received",
  },
];

export default function TheGiftOfHeaven() {
  return (
    <WatchVideoPage
      title="The Gift of Heaven"
      description="Is heaven a reward for good behavior, or is it a gift? Discover what Jesus really said about eternity."
      path="/video/the-gift-of-heaven"
      videoId="XB7wGTnYeaE"
      thumbnailSrc="/thumb-gift-of-heaven.jpg"
      responseOptions={RESPONSE_OPTIONS}
    />
  );
}
