import work from '../../pages/work.json';

import styles from './work-list.module.scss';
import WorkCard from '../work-card/work-card.component';

export default function WorkList() {
    return (
        <div className={styles.workList}>
            <h2>Featured Work.</h2>
            {
                work.work.map((work, i) => (
                    <WorkCard
                        key={i}
                        data={work}
                    />
                ))
            }
        </div>
    )
}