import { SiteNav } from "./SiteNav";

interface LPHeaderProps {
  showBrand?: boolean;
}

export function LPHeader({ showBrand = false }: LPHeaderProps) {
  return <SiteNav showBrand={showBrand} />;
}
