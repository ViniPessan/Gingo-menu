import styles from "./style.module.scss";
import { houseDrinks } from "@/data/houseDrinks";

export default function HouseDrinkMenu() {
  return (
    <div className={styles.houseDrinksSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Bebidas Da Casa</h1>
      </div>
      <div className={styles.houseDrinksCard}>
        {houseDrinks.map((drink) => (
          <div key={drink.id} className={styles.houseDrinksItem}>
            <div className={styles.houseDrinksNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.houseDrinksName}>{drink.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.houseDrinksPrice}>
                R${drink.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.houseDrinksIngredients}>
              {drink.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
