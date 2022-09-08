import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Facebook</title>
            </Head>

            <Header />
            <main className="flex">
                <Sidebar />
            </main>
        </div>
  )
}
