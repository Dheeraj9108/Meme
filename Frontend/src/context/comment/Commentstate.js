import React, { useState,useContext } from 'react'
// import { post } from '../../../../Backend/routes/auth';
import postcontext from '../post/postcontext';
import commentContext from './conmmentContext';


const Commentstate = (props) => {

    const Post_context = useContext(postcontext);
    const { posts,setPosts } = Post_context;

    const initialState = []
    const [comment, setComment] = useState(posts.comments);
    const postComment = async (postid, comment) => {

        const comments = {
            comment: comment
        }
        const response = await fetch(`http://localhost:7000/api/comment/postComment/${postid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            },
            body: JSON.stringify({ comments })
        })
        const json = await response.json();
        console.log(json);
        setPosts(json)
    }
    const getComment = async (postid) => {
        const res = await fetch(`http://localhost:7000/api/comment/getComment/${postid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            },
        })
        const response = await res.json();
        setComment(response);
        console.log(response);
    }
    return (
        <div>
            <commentContext.Provider value={{ comment, postComment, getComment }}>
                {props.children}
            </commentContext.Provider>

        </div>
    )
}

export default Commentstate
