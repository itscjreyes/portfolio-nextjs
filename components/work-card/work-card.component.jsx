import Link from 'next/link';

import styles from './work-card.module.scss';

const WorkCard = ({data}) => {
    const {title, descShort, slug, tags, url} = data;

    return (
        <div className={styles.workCard}>
            <div className={styles.contentWrapper}>
                <h3>{title}</h3>
                <p>{descShort}</p>
                <ul className="tags">
                    {
                        tags.map((tag, i) => (
                            <li key={i}>{tag}</li>
                        ))
                    }
                </ul>
                <div className={styles.btnGroup}>
                    <a href={url} className="btn btnSolid" target="_blank" rel="noopener noreferrer">View Live</a>
                    <Link href={`/work/${slug}`}><a className="btnArrow">Read More</a></Link>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;