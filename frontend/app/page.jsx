import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Button href="/">
        Push me
      </Button>
    </main>
  );
}
