import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   
    <div className={styles.container}>
      <style jsx>
    {
      `
      h2{
        font-size:40px;
      }
      h3{
        font-size:30px;
      }
      `
    }
      </style>
      <Head>
        <title>Coding Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="nextjs,blog,coding blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Coding Hub
        </h1>
        <div className={styles.imgwrap}>
        <Image className={styles.myimg} src="/homepage_main.jpg" alt="Vercel Logo" width={700} height={400}  />
        </div>

        <p className={styles.description}>
        A blog written by a coder for coders
      
        </p>

      <div className="blogs">
        <h2>Popular Blogs</h2>
        <div className="blog-item">
          <h3>How to learn js 2022</h3>
          <p>Js is a lang used to design logic for the web</p>
        </div>
        <div className="blog-item">
          <h3>How to learn js 2022</h3>
          <p>Js is a lang used to design logic for the web</p>
        </div>
        <div className="blog-item">
          <h3>How to learn js 2022</h3>
          <p>Js is a lang used to design logic for the web</p>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
