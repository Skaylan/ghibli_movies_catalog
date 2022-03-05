import styles from '../../styles/Movie.module.css'
import Description from '../../components/Description';
import Title from '../../components/Title';
import Header from '../../components/Header';
import Info from '../../components/Info';
import Poster from '../../components/Poster';


export const getStaticPaths = async() => {
  const res = await fetch('http://ghibliapi.herokuapp.com/films', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors'
    })
  const data = await res.json();

  const paths = data.map(movie => {
    return {
      params: {id: movie.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const data = await fetch('http://ghibliapi.herokuapp.com/films/' + id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors'
    });
  
    const movie = await data.json();
    return {
      props: {movie}
    }
}


export default function Movie({movie}) {
    return (
        <div className={styles.movie_page}>
          <Header/>
          <Title text={movie.title} />
          <div className={styles.banner}>
            <img src={movie.movie_banner} className={styles.skeleton} alt='Movie-Banner' />
          </div>
          <div className={styles.desc_container}>
            <Description text={movie.description} />
          </div>
          <br></br>
          <div className={styles.info_container}>
            <div className={styles.spacer_sm}></div>
            <div className={styles.inner_info_container}>
              <Info prefix='Title' text={movie.title}/>
              <Info prefix='Original Title' text={movie.original_title}/>
              <Info prefix='Original Title Romanised' text={movie.original_title_romanised}/>
              <Info prefix='Director' text={movie.director}/>
              <Info prefix='Producer' text={movie.producer}/>
              <Info prefix='Release Date' text={movie.release_date}/>
              <Info prefix='Movie Score' text={movie.rt_score}/>
            </div>
            <div className={styles.spacer_lg}></div>
            <Poster image={movie.image} />
          </div>
        </div>
    )
}