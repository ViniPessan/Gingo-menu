import styles from "./style.module.scss";
import {  MenuSectionProps } from "@/types/menu";


export default function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className={styles.menuSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.menuCard}>
        {items.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <div className={styles.nameAndPrice}>
              <div className={styles.nameAndDots}>
                <h2 className={styles.itemName}>{item.nome}</h2>
                <span className={styles.dots}></span>
              </div>
              <p className={styles.itemPrice}>R${item.preço.toFixed(2)}</p>
            </div>
            <div className={styles.ingredients}>{item.ingredientes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
