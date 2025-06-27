import styles from "./style.module.scss";
import { drinks } from "@/data/drinks";

export default function DrinkMenu() {
  return (
    <div className={styles.drinksSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Bebidas</h1>
      </div>
      <div className={styles.drinksCard}>
        {drinks.map((drink) => (
          <div key={drink.id} className={styles.drinksItem}>
            <div className={styles.drinksNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.drinksName}>{drink.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.drinksPrice}>
                R${drink.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.drinksIngredients}>
              {drink.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
