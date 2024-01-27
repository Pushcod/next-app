import React from 'react';
import styles from '@/app/components/Menu/Menu.module.sass';
import Link from 'next/link';

export default function Menu(props) {
  return (
    <div>
      <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <Link href={props.menuUrl} rel='stylesheet' className={styles.menu__text}>{props.menuText}</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link href={props.menuUrl2} rel='stylesheet' className={styles.menu__menutext}>{props.text2}</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link href={props.menuUrl3} rel='stylesheet' className={styles.menu__text}>{props.text3}</Link>
                </li>
                
            </ul>
    </div>
  )
}
