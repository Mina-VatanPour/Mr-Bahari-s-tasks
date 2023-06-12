import useFetch from "../custom-hooks/useFetch";
import {useState} from "react";
import styles from "../css/styles.module.css";

const AutoCompleteTitle = ({title, setTitle}) => {

    const {data: posts} = useFetch('http://localhost:8000/posts');
    const [searchList, setSearchList] = useState(false);

    const handleChange = (event) => {

        setTitle(event.target.value);

        if (event.target.value.length > 2) setSearchList(true);
        else setSearchList(false);
    }
    const handleClick = (event) => {
        setTitle(event.target.innerHTML.trim());
    }

    return (
        <div className="autoCompleteTitle">

            <div>
                <input type="search" value={title} onChange={handleChange} autoComplete="off"/>
                <button className={styles.buttonSearch}>search</button>
            </div>

            <div className={styles.searchBox} style={{display: !searchList ? 'none' : 'block'}}>

                {
                    posts && posts.filter(item => item.title.includes(title) || item.title === title).map(post => {
                    return (<p onClick={handleClick} className={styles.selectOption} key={post.id}>  {post.title} </p>)
                })
                }

            </div>
        </div>)
}
export default AutoCompleteTitle;