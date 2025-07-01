import { beers } from "@/data/beers";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Cervejas" items={beers} />;
}
