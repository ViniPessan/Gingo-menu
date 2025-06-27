import styles from "./style.module.scss";
import { desserts } from "@/data/desserts";

export default function DessertMenu() {
  return (
    <div className={styles.dessertsSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Sobremesas</h1>
      </div>
      <div className={styles.dessertsCard}>
        {desserts.map((desserts) => (
          <div key={desserts.id} className={styles.dessertsItem}>
            <div className={styles.dessertsNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.dessertsName}>{desserts.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.dessertsPrice}>
                R${desserts.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.dessertsIngredients}>
              {desserts.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
