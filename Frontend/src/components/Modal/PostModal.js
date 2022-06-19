
import React, { useContext, useState } from 'react'
import postcontext from '../../context/post/postcontext'
import axios from 'axios';

const PostModal = (props) => {

    // const context = useContext(postcontext);
    // const {addPost} = context; 
    // const [selectedfile,setselectedfile] = useState(null);


    // const [post, setPost] = useState({ description: "", obj: "" });
    // const [file,setFile] = useState();

    // const onchange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // }
    // const formchange = (e)=>{
    //     setselectedfile(e.target.files[0])
    // }

    // var input = document.querySelector('input[type="file"]')

    // const handleClick = (e)=>{
    //     e.preventDefault();
    //     // const input = document.getElementById('file_upload');
    //     // input.addEventListener('change',onSelectFile,false);
    //     // var file ;
    //     // const onSelectFile=()=>{
    //     //     file = input.files[0];
    //     // }
    //     const data = new FormData();
    //     data.append("file",input.files[0]);
    //     data.append("description",post.description);
    //     data.append("obj",post.obj);
    //     addPost(data.file);
    //     // console.log(response);
    // }

    const [userInfo, setUserInfo] = useState({
        file: [],
        description: ""
    });
    const handleInputChange = (e) => {
        setUserInfo({ ...userInfo, file: e.target.files[0] })
    }
    const dhandle = (e) => {
        setUserInfo({ ...userInfo, description: e.target.value })
    }

    const submit = async (e) => {

        const formdata = new FormData();
        const desc = document.getElementById('desc').value;
        formdata.append('avatar', userInfo.file);
        formdata.append('description', desc);
        console.log(desc)
        const res = await axios.post("http://localhost:7000/api/post/addpost", formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            },
        });
        console.log(res.data);
        document.getElementById('file_upload').value = '';
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                            <input type="text" onChange={dhandle} name="description" className="form-control" id="desc" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="file_upload" className="form-label">Upload</label>
                            <input type="file" onChange={handleInputChange} name='userPost' className="form-control" id="file_upload" />
                        </div>
                        <button type="submit" onClick={() => submit()} className="btn btn-primary">Submit</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal
