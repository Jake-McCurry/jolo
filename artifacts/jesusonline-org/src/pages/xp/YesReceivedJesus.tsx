import { useEffect } from "react";
import { FollowXPPage } from "@/components/xp/FollowXPPage";
import { trackConversion } from "@/lib/track";

export default function YesReceivedJesus() {
  useEffect(() => {
    trackConversion("yes_received_jesus");
  }, []);

  return <FollowXPPage type="received" path="/xp/yes-i-received-jesus" />;
}
