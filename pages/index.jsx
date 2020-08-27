import Head from 'next/head';
import Link from 'next/link';
import work from './work.json';

export default function Home(props) {
  const work = props.work.work;
  
  return (
    <div>
      <Head>
        <title>CJ Reyes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>CJ Reyes</h1>
      {
        work.map((work, i) => (
          <Link href={`/work/${work.slug}`} key={i}><a>{work.title}</a></Link>
        ))
      }
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      work
    }
  }
}