import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={`container ${styles.container}`}>
            <Link href="/"><a>CJ Reyes</a></Link>
        </div>
    </header>
)

export default Header;