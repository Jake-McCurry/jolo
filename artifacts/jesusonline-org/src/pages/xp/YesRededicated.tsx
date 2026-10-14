import { useEffect } from "react";
import { FollowXPPage } from "@/components/xp/FollowXPPage";
import { trackConversion } from "@/lib/track";

export default function YesRededicated() {
  useEffect(() => {
    trackConversion("yes_rededicated");
  }, []);

  return <FollowXPPage type="rededicated" path="/xp/yes-i-rededicated" />;
}
