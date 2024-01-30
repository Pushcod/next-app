import Styles from "@/app/components/Card/Card.module.sass"
import Image from "next/image"
import Button from "@/app/components/Button/Button"

export default function Card(props) {
  return (
    <div className={Styles.card}>
        <div className={Styles.card__wrapper}>
            <h2 className={Styles.card__title}>{props.name}</h2>
            <p className={Styles.card__text}>{props.text}</p>
            <Button href={props.cardUrl}>Подробнее</Button>
        </div>
    </div>
  )
}
