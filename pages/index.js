import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import Title from '../components/Title';
import Link from 'next/link'
import Header from '../components/Header';
import Head from 'next/head';


export async function getStaticProps() { 
  const data = await fetch('http://ghibliapi.herokuapp.com/films', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    mode: 'cors'
  });

  const movies = await data.json();
  // console.log(movies)
  return {
    props: {movies}
  }
}

export default function Home({movies}) {
  return (
    <div className={styles.all}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <Title text='Ghibli Movies Catalog' />
      <div className={styles.home}>
          {movies.map(movie => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <a>
                <Card title={movie.title} img={movie.image} key={movie.id} releaseDate={movie.release_date} />
              </a>
            </Link>
            ))}
      </div>
    </div>
  )
  
}

