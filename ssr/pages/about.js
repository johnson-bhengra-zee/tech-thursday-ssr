import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App - About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className={styles.header}>About SSR</h1>
        <Link href="/">Home Page</Link>
      </main>
      <Footer />
    </div>
  )
}
