import styles from '../css/styles.module.css';
import {Link} from "react-router-dom"
import ShowResult from "./ShowResult";
import {useSearchParams} from "react-router-dom";

const SearchResultPage = () => {

    const [searchParams] = useSearchParams();
    const queryParams = searchParams.get('query');

    return (
        <div className={styles.searchResultPage}>
            <p className={styles.result}>Search Result : </p>
            <button className={styles.button}>
                <Link to="/" className={styles.link}>Back To Home</Link>
            </button>
            <ShowResult queryParams={queryParams }/>
        </div>
    )
}
export default SearchResultPage;