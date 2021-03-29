import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (input) => {
        input.preventDefault();

        const blog = { title, author, body };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs',{ 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then( () => {
            setIsPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Create a New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    required 
                    type="text"
                    value={ title }
                    onChange={ input => setTitle(input.target.value)}
                 />
                <label>Author:</label>
                <input 
                    required 
                    type="text"
                    value={ author }
                    onChange={ input => setAuthor(input.target.value)}
                 />
                <label>Text:</label>
                <textarea 
                    required
                    value={ body }
                    onChange={ input => setBody(input.target.value)}
                ></textarea>
                { !isPending && <button>Create</button>}
                { isPending && <button>Creating new blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;