import styles from './css/Poster.module.css'


export default function Poster({image}) {
    return (
        <div className={styles.poster}>
            <h3>Movie Poster</h3>
            <img className={styles.skeleton} src={image} alt='Movie-Poster' />
        </div>
    )
}