import styles from "./style.module.scss"
import { burgerOfMounth } from "../../data/burger";
import Image from "next/image";

export default function BurgerOfMounth() {
  return (
  <div className="flex flex-col justify-center items-center">
      <h1 className={styles.title}>Burger Do Mês🔥</h1>
    <section className={styles.burgerSection}>
      {burgerOfMounth.map((burger) => (
        <div key={burger.id} className={styles.burgerCard}>
          <div className={styles.imgSection}>
            <Image src={burger.imagem} alt={burger.nome} width={100} height={100} className={styles.imgBurger}/>
             
          </div>
          <h2 className={styles.burgerName}>{burger.nome}</h2>
          <p className={styles.burgerIngrdients}>{burger.ingredientes}</p>
          <p className={styles.burgerPrice}>R${burger.preço.toFixed(2)}</p>
        </div>
      ))}
    </section>
  </div>
  );
}
