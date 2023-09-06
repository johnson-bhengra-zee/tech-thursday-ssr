import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App - Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className={styles.header}>Home SSR</h1>
        <Link href="/about">About Page</Link>
      </main>
      <Footer />
    </div>
  )
}
