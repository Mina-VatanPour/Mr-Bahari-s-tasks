import {useState} from "react";
import useFetch from "../custom-hooks/useFetch";
import {useNavigate} from 'react-router-dom';
import AutoCompleteTitle from "./AutoCompleteTitle";


const Home = () => {

    const [title, setTitle] = useState('');
    const {data: posts} = useFetch('http://localhost:8000/posts');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (posts && title.length > 0) {
            const searchedPosts = posts.filter(post => post.title.includes(title))
            if (searchedPosts) {
                return (navigate('/search-result', {
                    state: {
                        searchedPosts,
                        title
                    }
                }))
            }
        }
    }


    return (<div className="Home">
        <p style={{fontSize: '50pt'}}>SEARCH APP WITH REACT</p>

        <form onSubmit={handleSubmit}>

            <AutoCompleteTitle title={title} setTitle={setTitle} posts={posts}/>

            <button className="Button-search" style={{marginTop: '30px'}}>search</button>
        </form>


    </div>)
}
export default Home