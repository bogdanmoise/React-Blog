import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div classname="not-found">
            <h2>Oops...</h2>
            <p>Cannot find your page :(</p>
            <Link to="/">Go back to the Homepage</Link>
        </div>
     );
}
 
export default NotFound;