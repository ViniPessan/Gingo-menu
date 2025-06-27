import styles from "./style.module.scss";
import { beers } from "@/data/beers";

export default function BeerMenu() {
  return (
    <div className={styles.beersSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Cervejas</h1>
      </div>
      <div className={styles.beersCard}>
        {beers.map((drink) => (
          <div key={drink.id} className={styles.beersItem}>
            <div className={styles.beersNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.beersName}>{drink.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.beersPrice}>
                R${drink.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.beersIngredients}>
              {drink.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
