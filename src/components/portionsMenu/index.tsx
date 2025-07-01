import { portions } from "@/data/portions";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Porções" items={portions} />;
}
