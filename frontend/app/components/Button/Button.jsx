import Styles from "@/app/components/Button/Button.module.sass"
import Link from "next/link"
export default function Button(props) {
    if (props.href){
        return(
            <Link href={props.href} className={Styles.button} >
                {props.children}
            </Link>
        )
    }
return (
    <button className={Styles.button}>
            {props.children}
    </button>
  )
}
