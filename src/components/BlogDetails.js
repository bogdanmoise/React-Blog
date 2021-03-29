import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, { method: 'delete' })
            .then( () => {
                history.push('/');
            });
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>ERROR Something is wrong...</div> }
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div className="blog-details-body">{ blog.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;