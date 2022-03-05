import styles from './css/Description.module.css'

export default function Description({text}) {
    return (
        <div className={styles.desc_container}>
            <p className={styles.p}>{text}</p>
        </div>
    )
}