import styles from './footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
            CJ Reyes <span>|</span> 2020
        </div>
    </footer>
)

export default Footer;