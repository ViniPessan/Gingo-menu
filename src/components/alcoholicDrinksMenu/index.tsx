import styles from "./style.module.scss";
import { alcoholicDrink } from "@/data/alcoholicDrinks";

export default function AlcoholicDrinkMenu() {
  return (
    <div className={styles.alcoholicDrinksSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Drinks</h1>
      </div>
      <div className={styles.alcoholicDrinksCard}>
        {alcoholicDrink.map((drink) => (
          <div key={drink.id} className={styles.alcoholicDrinksItem}>
            <div className={styles.alcoholicDrinksNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.alcoholicDrinksName}>{drink.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.alcoholicDrinksPrice}>
                R${drink.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.alcoholicDrinksIngredients}>
              {drink.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
