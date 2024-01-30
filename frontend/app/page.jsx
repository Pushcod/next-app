import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header"
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Menu from "./components/Menu/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu menuUrl1="/1" linkText1="Ссылка 1" menuUrl2="/2" linkText2="Ссылка 2" menuUrl3="/3" linkText3="Ссылка 3"/>
      <Card cardUrl="/post1" name="Имя 1" text="lorem2515sdfhd"/>
      <Card cardUrl="/post2" name="Имя 2" text="lorem2515fhdafh"/>
      <Card cardUrl="/post3" name="Имя 3" text="lorehdafhadsfham2515"/>
    </main>
  );
}
