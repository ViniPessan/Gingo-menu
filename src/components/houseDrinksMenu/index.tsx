import { houseDrinks } from "@/data/houseDrinks";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Bebidas Da Casa" items={houseDrinks} />;
}
