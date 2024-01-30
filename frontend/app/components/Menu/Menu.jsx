import Styles from "@/app/components/Menu/Menu.module.sass"
import Link from "next/link"

export default function Menu(props) {
  return (
    <menu className={Styles.menu}>
        <ul className={Styles.menu__list}>
            <li className={Styles.menu__item}>
                <Link className={Styles.menu__link} rel="stylesheet" href={props.menuUrl1}>{props.linkText1}</Link>
            </li>
            <li className={Styles.menu__item}>
                <Link className={Styles.menu__link} rel="stylesheet" href={props.menuUrl2}>{props.linkText2}</Link>
            </li>
            <li className={Styles.menu__item}>
                <Link className={Styles.menu__link} rel="stylesheet" href={props.menuUrl3}>{props.linkText3}</Link>
            </li>
        </ul>
    </menu>
  )
}
