import React, { useContext, useEffect, useState } from 'react'
import commentContext from '../context/comment/conmmentContext';

const Commentform = (props) => {
    
    const [comment,setComment] = useState({cmnt:""});
    const cmnt = useContext(commentContext);
    const { postComment } = cmnt;


    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        postComment(props.postid,comment.cmnt);
        alert("Commented Successfully")
    }
    return (
        <div className="collapse" id="collapseExample">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Comment... </label>
                <input type="text" className="form-control" name="cmnt" onChange={handleChange} id="exampleInputEmail1" placeholder='comment.....' aria-describedby="emailHelp" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Commentform
