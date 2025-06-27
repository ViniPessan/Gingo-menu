import styles from "./style.module.scss"

export default function Header() {
   return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Cardápio</p>
      </div>
    </header>
  );
}