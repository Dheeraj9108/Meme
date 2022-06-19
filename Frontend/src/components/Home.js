import React, { useContext, useEffect } from 'react'
import postcontext from '../context/post/postcontext';
import Postitem from './Postitem';

const Home = () => {
    const Post_context = useContext(postcontext);
    const { posts, fetchpost } = Post_context;
    useEffect(() => {
        fetchpost();
        // eslint-disable-next-line 
    }, [])
    return (
        <div>
            {posts.map((post) => {
                return <Postitem post={post} />
            })}
        </div>
    )
}

export default Home
