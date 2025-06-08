import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Post(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect (() => {
        getPosts()
            .then(data => setPosts(data))
            .catch(err => alert(err.message))
            .finally(() => setLoading(false));
}, []);

if (loading) return <p>Carregando...</p>;

return (
    <div>
        <h2>Lista de posts</h2>
        <ul>
            {posts.map(post => (
                <li 
                key={post.id}
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => navigate(`/posts/${post.id}`)}
                title="Clique para ver os detalhes do post"
                > 
                &gt; {post.title}
                </li>
            ))}
        </ul>
    </div>
);
}
export default Post;

