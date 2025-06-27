import styles from "./style.module.scss";
import { portions } from "@/data/portions";

export default function PortionMenu() {
  return (
    <div className={styles.portionSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Porções</h1>
      </div>
      <div className={styles.portionCard}>
        {portions.map((portion) => (
          <div key={portion.id} className={styles.portionItem}>
            <div className={styles.portionNameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.portionName}>{portion.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.portionPrice}>
                R${portion.preço.toFixed(2)}
              </p>
            </div>
            <div className={styles.portionIngredients}>
              {portion.ingredientes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
