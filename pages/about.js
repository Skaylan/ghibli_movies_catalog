import Header from "../components/Header";
import Title from "../components/Title";
import styles from '../components/css/About.module.css'
import Head from "next/head";
export default function About() {
    return (
        <div className={styles.about_page}>
            <Head>
                <title>Abou Page</title>
            </Head>
            <Header ref1="/" ref1_text='Home' ref2='/about' ref2_text2='About' />
            <Title text='About this website'/>
            <p>This website was developed with NextJS by <a className={styles.link} href="https://linkedin.com/in/lucas-gomes-oliveira" target='_blank' rel="noreferrer">Lucas Oliveira</a> using the the following api <a className={styles.link} href="https://ghibliapi.herokuapp.com/" target='_blank' rel="noreferrer">ghibliapi.herokuapp.com</a></p>
            <p>As a fan of Ghibli Studio movies, i found perfect to use this particular api to learn NextJs and FrontEnd develoment in general.</p>
            <p>Sen to Chihiro no Kamikakushi (Spirited Away) is my favourite movie by the way, not my favourite Ghibli Studio movie, this is my favourite movie ever.</p>
            <p>I hope you find one of Ghibli's movie to love as i do. ♥</p>
            <p>This is a non-oficcial Ghibli website, this project generates no profit and have no commercials intentions!</p>
            <p>If you are a Ghibli Studios copyright holder, and believe that this project should not be online, please contact: dev.skaylan@gmail.com </p>
        </div>
    )
}