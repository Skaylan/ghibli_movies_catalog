import Link from 'next/link'
import Image from 'next/image'
import styles from './css/Header.module.css'
import logo from '../public/ghibli-icon.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <Link href='/'>
                    <a>
                        <Image src={logo} alt='ghobli-logo'/>
                    </a>
                </Link>
            </div>
            <div className={styles.nav_links}>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </div>
        </div>
    )
}