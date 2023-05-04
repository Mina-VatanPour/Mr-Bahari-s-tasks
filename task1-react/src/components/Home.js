import {useState} from "react";
import useFetch from "../custom-hooks/useFetch";
import {useNavigate} from 'react-router-dom';


const Home = () => {

    const [title, setTitle] = useState('');
    const {data: posts} = useFetch('https://jsonplaceholder.typicode.com/posts');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (posts) {
            const searchedPosts = posts.filter(post => {
                return post.title.includes(title);
            });
            return (navigate('/search-result', {
                state: {
                    searchedPosts,
                }
            }))
        }
    }


    return (<div className="Home">
        <p style={{fontSize: '50pt'}}>SEARCH APP WITH REACT</p>

        <form onSubmit={handleSubmit}>
            <input type="search" value={title} onChange={e => setTitle(e.target.value)}
                   placeholder="Search for the title you want"/>
            <button>search</button>
        </form>


    </div>)
}
export default Home