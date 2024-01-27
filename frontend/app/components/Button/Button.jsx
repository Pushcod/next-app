import React from 'react'
import styles from '@/app/components/Button/Button.module.sass'
import Link from 'next/link'

export default function Button(props) {
    if(props.href){
        return(
            <Link href={props.href} className={styles.button}>
                { props.children }
            </Link>
        )
    }
  return (
    <button className={styles.button}>
        { props.children }
    </button>
  )
}
