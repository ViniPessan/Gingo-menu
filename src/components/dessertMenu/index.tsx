import { desserts } from "@/data/desserts";
import MenuSection from "../menuSection/index";

export default function PortionMenu() {
  return <MenuSection title="Sobremesas" items={desserts} />;
}
