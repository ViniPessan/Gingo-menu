import { drinks } from "@/data/drinks";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Bebidas" items={drinks} />;
}
