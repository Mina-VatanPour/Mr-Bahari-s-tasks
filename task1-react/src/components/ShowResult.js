import styles from "../css/styles.module.css";
import useFetch from "../custom-hooks/useFetch";

const ShowResult = ({queryParams}) => {

    const {data: posts, isLoading} = useFetch('http://localhost:8000/posts');
    let listPosts;

    if (posts) {
        listPosts = posts.map(post => {
            return (
                post.title.includes(queryParams) || post.title === queryParams ?
                    <div className={styles.resultItems}>
                        <p className={styles.titles}>TITLE : {post.title}</p>
                        <p className={styles.fontSm}>{post.body}</p>
                    </div> : null
            )
        })
    } else listPosts = <p>Not Found Ent Posts :( </p>


    return (
        <div className="showResult">
            {isLoading ? <p>LOADING...</p> : listPosts}
        </div>
    )

}
export default ShowResult;

