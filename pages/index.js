import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>1.1) Image for cover example: </h2>
        <code>layout="fill" objectFit="cover"</code>
        <div className={styles.hero}>
          <Image
            src="/cover.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2>1.2) Image for cover example: </h2>
        <code>layout="responsive" width="1600" height="900"</code>
        <div className={styles.hero}>
          <Image
            src="/cover.jpg"
            alt="Picture of the author"
            layout="responsive"
            width="1600"
            height="900"
          />
        </div>
        <h2>2.1) Image for listing example: </h2>
        <code>
          layout="responsive" width="400" height="300" objectFit="cover"
        </code>
        <div className={styles.listing}>
          <Image
            src="/prod.jpg"
            alt="Picture of the author"
            layout="responsive"
            width="400"
            height="300"
            objectFit="cover"
          />
          A product title
        </div>
        <h2>2.2 Image for listing fill example: </h2>
        <code>
          layout="fill" objectFit="cover" (fixed proportion with padding-bottom
          trick)
        </code>
        <div className={styles.listing}>
          <div className={styles.listingImage}>
            <Image
              src="/prod2.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          A product title
        </div>
        <h2>2.3 Image for listing fill example: </h2>
        <code>
          layout="responsive" width="400" height="300" objectFit="cover" sizes=
          {["(min-width: 640px) 640px", "(min-width: 1080px) 1080px"]}
        </code>
        <div className={styles.listing}>
          <Image
            src="/prod3.jpg"
            alt="Picture of the author"
            layout="responsive"
            width="400"
            height="300"
            objectFit="cover"
            sizes={["(min-width: 640px) 640px", "(min-width: 1080px) 1080px"]}
          />
          A product title
        </div>
        -------------------------------------
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
