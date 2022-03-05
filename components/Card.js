import styles from './css/Cards.module.css'


export default function Card({title, img, key}) {
    return (
        <div key={key} className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.img_container}>
                <img className={styles.skeleton} src={img} alt='Movie-Poster' />
            </div>
        </div>
    )
}