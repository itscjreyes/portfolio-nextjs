import work from '../work.json';
import Header from '../../components/header/header.component';

const Work = (props) => {
    const {title, description} = props.data[0];

    return (
        <>
        <Header />
        <h1>{title}</h1>
        <p>{description}</p>
        </>
    )
}

export const getServerSideProps = ({query}) => {
    const data = work.work.filter(a=>a.slug==query.id)

    return {
        props: {
            data
        }
    }
}

export default Work;