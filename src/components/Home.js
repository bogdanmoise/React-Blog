import BlogList from './BlogList.js';
import useFetch from '../useFetch.js';

const Home = () => {

    const loadingMessage = "Loading...";
    const title = "Blog Posts";
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <h2>{error}</h2> }
            { isPending && <h2>{loadingMessage}</h2> }
            { blogs && <BlogList blogs={blogs} title={title} /> }
        </div>
     );
}
 
export default Home;