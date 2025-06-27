import styles from "./style.module.scss";
import { additionals } from "@/data/additionals";

export default function AdditionalMenu() {
  return (
    <div className={styles.additionalsSection}>
      <h1 className={styles.title}>Adicionais</h1>
      <div className={styles.additionalCard}>
        {additionals.map((additional) => (
          <div key={additional.id} className={styles.additionalItem}>
            <div className={styles.nameAndDots}>
              <h2 className={styles.additionalName}>{additional.nome}</h2>
              <span className={styles.dots}></span>
            </div>
            <p className={styles.additionalPrice}>
              R${additional.preço.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
