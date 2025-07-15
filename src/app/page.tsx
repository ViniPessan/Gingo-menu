import AdditionalMenu from "@/components/additionalMenu";
import AlcoholicDrinkMenu from "@/components/alcoholicDrinksMenu";
import BeerMenu from "@/components/beersMenu";
import BurgerMenu from "@/components/burgerMenu";
import DessertMenu from "@/components/dessertMenu";
import DrinkMenu from "@/components/drinksMenu";
import Header from "@/components/header";
import HouseDrinkMenu from "@/components/houseDrinksMenu";
import PortionMenu from "@/components/portionsMenu";
import styles from "@/app/styles.module.scss"
import BurgerOfMounth from "@/components/burgerOfMounthMenu";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
    <Header/>
      <main className="">
        <BurgerOfMounth/>
        <BurgerMenu/>
        <AdditionalMenu/> 
        <div className={styles.section}>
         <div className={styles.gridLayout}>
          <PortionMenu/>
          <DrinkMenu/>
          <AlcoholicDrinkMenu/>
          <BeerMenu/>
          <DessertMenu/>
          <HouseDrinkMenu/>
         </div>
        </div>
      </main>
    <footer className="">
        {/* <Footer/> */}
      </footer>
    </div>
  );
}
