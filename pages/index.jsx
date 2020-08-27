import Head from 'next/head';
import Header from '../components/header/header.component';
import About from '../components/about/about.component';
import WorkList from '../components/work-list/work-list.component';
import Contact from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CJ Reyes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="scroll-wrapper">
        <div className="container">
          <About />
          <WorkList />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

