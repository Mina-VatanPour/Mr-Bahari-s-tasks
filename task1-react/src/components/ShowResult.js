import styles from "../css/styles.module.css";
import useFetch from "../custom-hooks/useFetch";

const ShowResult = ({queryParams}) => {

    const {data: posts, isLoading} = useFetch('http://localhost:8000/posts');

    return (
        <div className="showResult">
            {isLoading ? <p>LOADING...</p> : posts && posts.map(post => {
                return (
                    post.title.includes(queryParams) || post.title === queryParams ?
                        <div className={styles.resultItems} key={post.id}>
                            <p className={styles.titles}>TITLE : {post.title}</p>
                            <p className={styles.fontSm}>{post.body}</p>
                        </div> : null
                )
            })}
        </div>
    )

}
export default ShowResult;

