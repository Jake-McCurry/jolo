export function trackConversion(label: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", "conversion", { event_category: "funnel", event_label: label });
  w.fbq?.("track", "Lead", { content_name: label });
}
