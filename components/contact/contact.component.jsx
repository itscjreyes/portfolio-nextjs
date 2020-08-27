import styles from './contact.module.scss';

const Contact = () => (
    <div className={styles.contact} id="contact">
        <div className="container">
            <h2>Let's Work Together.</h2>
            <ul>
                <li><a className="btn btnHollow" href="mailto:itscjreyes@gmail.com" target="_blank" rel="noopener noreferrer">itscjreyes@gmail.com</a></li>
                <li><a className="btn btnHollow" href="https://linkedin.com/in/itscjreyes" target="_blank" rel="noopener noreferrer">linkedin.com/in/itscjreyes</a></li>
                <li><a className="btn btnHollow" href="https://github.com/itscjreyes" target="_blank" rel="noopener noreferrer">github.com/itscjreyes</a></li>
            </ul>
        </div>
    </div>
)

export default Contact;