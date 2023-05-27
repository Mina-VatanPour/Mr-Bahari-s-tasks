import {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import AutoCompleteTitle from "./AutoCompleteTitle";
import styles from "../css/styles.module.css";

const Home = () => {

    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/search-result',
            search: `?${createSearchParams({ query: title })}`,
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