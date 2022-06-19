import React from 'react'
import Commentform from './Commentform'
import Commentitem from './Commentitem'
import Comment from './Comment'
// import post from "./post.jpg"


const Postitem = (props) => { 
    const {post} = props;
    return (
        <>
            <div className="card my-4 " >
                <div className="card-body ">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{post.description}</h5>
                        <p className="card-text">Posted 1 year ago</p>
                    </div>
                </div>
                <img src={post.img} className="img-fluid card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="/" className="btn btn-primary">Likes 1k</a>
                        <Comment />
                    </div>
                    <Commentform />
                    <Commentitem />
                </div>
            </div>
           
        </>
    )
}

export default Postitem
