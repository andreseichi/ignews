import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>09 de Novembro de 2021</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestias blanditiis sunt ex vel aliquid minima distinctio earum,
              quia exercitationem.
            </p>
          </a>
          <a href="">
            <time>09 de Novembro de 2021</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestias blanditiis sunt ex vel aliquid minima distinctio earum,
              quia exercitationem.
            </p>
          </a>
          <a href="">
            <time>09 de Novembro de 2021</time>
            <strong>Título do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              molestias blanditiis sunt ex vel aliquid minima distinctio earum,
              quia exercitationem.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
