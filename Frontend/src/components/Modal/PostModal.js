import React, { useContext, useState } from 'react'
import postcontext from '../../context/post/postcontext'

const PostModal = () => {

    const context = useContext(postcontext);
    const {addPost} = context; 


    const [post,setPost] = useState({description:""});

    const onchange =(e)=>{
        setPost({...post,[e.target.name]:e.target.value});
    }

    const handleClick = (e)=>{
        // var data = new FormData();
        console.log("hellow"+JSON.stringify(document.querySelector('input[type="file"]').files[0]));
        // var imageData = document.getElementById('exampleInputPassword1').files[0];
        // data.append("data",imageData);

        e.preventDefault();
        addPost(post.description);
        alert('Post Added Successufully')
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload New Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleClick} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                                <input type="text" onChange={onchange} name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Upload</label>
                                <input type="file" name='userPost' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal
