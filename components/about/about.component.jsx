import Link from 'next/link';
import styles from './about.module.scss';

const About = () => (
    <div className={styles.about}>
        <h1>Hello.</h1>
        <p><strong>I’m CJ Reyes.</strong> I’m a front-end web developer based in Toronto, Canada. I love to create beautiful, user-friendly, high-converting websites. With my great eye for design, I build engaging, pixel-perfect digital experiences that help make the web a more beautiful place.</p>
        <Link href="/#contact"><a className="btn btnHollow">Get in Touch</a></Link>
    </div>
)

export default About;