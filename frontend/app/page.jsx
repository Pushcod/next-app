import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Menu from "./components/Menu/Menu";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
     
      <Card cardUrl="/post" title="Мой первый пост" text="Описание моего поста" />
      <Card cardUrl="/post" title="Мой первый пост2" text="Описание моего поста2" />
      <Card cardUrl="/post" title="Мой первый пост3" text="Описание моего поста3" />
      <Card cardUrl="/post" title="Мой первый пост4" text="Описание моего поста4" />
      <Menu menuUrl1="/post" menuText="Ссылка 1" />
      <Menu menuUrl2="/post" text2="Ссылка 1" />
      <Menu menuUrl3="/post" text3="Ссылка 1" />

    </main>
  );
}
