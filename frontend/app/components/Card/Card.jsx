import React from 'react';
import styles from '@/app/components/Card/Card.module.sass';
import Button from '@/app/components/Button/Button';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
            <h2 className={styles.card__title}>{props.title}</h2>
            <p className={styles.card__text}>{props.text}</p>
            <Button href={props.cardUrl}>Карточка</Button>
      </div>
    </div>
  )
}
