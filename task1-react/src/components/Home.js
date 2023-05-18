import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AutoCompleteTitle from "./AutoCompleteTitle";
import styles from "../css/styles.module.css";

const Home = () => {

    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({
            pathname: '/search-result',
            search: `query=${title.replace(/\s/g, '-')}`,
        });
    }

    return (
        <div className={styles.home}>
            <p className={styles.fontXl}>SEARCH APP WITH REACT</p>
            <form onSubmit={handleSubmit}>
                <AutoCompleteTitle title={title} setTitle={setTitle}/>
                <button className={styles.buttonSearch}>search</button>
            </form>
        </div>
    )
}
export default Home