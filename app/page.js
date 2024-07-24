import Image from "next/image";
import styles from "./page.module.css";
import Price from "../screens/price";

export default function Home() {
  return (
    <main className={styles.main}>
      <Price />
    </main>
  );
}
