import { alcoholicDrink } from "@/data/alcoholicDrinks";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Drinks" items={alcoholicDrink} />;
}
