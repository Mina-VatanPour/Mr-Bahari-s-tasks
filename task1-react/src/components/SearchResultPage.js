import {useLocation, Link} from "react-router-dom";


const SearchResultPage = () => {
    const location = useLocation();
    let searchedPosts = location.state.searchedPosts;

    return (
        <div className="Search-result-page">

            <p style={{fontSize: '20pt', fontWeight: 'bold', color: 'green'}}>Search Result :
                ({searchedPosts.length > 0 ? searchedPosts.length + " Items Found" : " Not Found Items"} ) </p>
            <button
                style={{background: 'red', padding: '10px', borderRadius: '5px', marginBottom: '20px'}}>
                <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>Back To Home</Link>
            </button>

            {searchedPosts && searchedPosts.map(post => {
                return (
                    <div className="Result-items" key={post.id}>
                        <p style={{color: 'blue', fontSize: '14pt', fontWeight: 'bold'}}>TITLE : {post.title}</p>
                        <p style={{fontSize: '12pt'}}>{post.body}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default SearchResultPage;