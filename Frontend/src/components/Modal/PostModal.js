
import React, {useContext,  useState } from 'react'
import postcontext from '../../context/post/postcontext'

const PostModal = (props) => {

    const context = useContext(postcontext);
    const {addPost} = context; 


    const [post,setPost] = useState({description:""});
    // const [file,setFile] = useState();

    const onchange =(e)=>{
        setPost({...post,[e.target.name]:e.target.value});
    }
    // const formchange = (e)=>{
    //     setFile(e.target.files[0])
    // }
   
 
    const handleClick = (e)=>{
        e.preventDefault();
        // const url = 'http://localhost:7000/addpost';
       
        // data.append('file',file);
        // data.append('filename',file.name);
        // const config = {
        //     method:'POST',
        //     headers:{
                
        //         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
        //     }
        // };
        // const res = fetch(url,config,data).then((res)=>{
        //     console.log(res);
        // })
        // var imageData = document.getElementById('exampleInputPassword1').files[0];
        
        const input = document.getElementById("file_upload");
        // console.log(input.files[0]);
        // data.append("data",input.files[0]);
        addPost(post.description);
        alert('Post Added Successufully')
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload New Post</h5>
                        <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form method='post' action='http://localhost:7000/api/post/addpost' encType='multipart/form-data'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                                <input type="text" onChange={onchange} name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" defaultValue={props.id} name="obj" className="form-control d-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file_upload" className="form-label">Upload</label>
                                <input type="file" name='userPost' className="form-control" id="file_upload" />
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
