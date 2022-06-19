import React, { useState } from 'react'
import postcontext from './postcontext'
import axios from 'axios'


const Poststate = (props) => {
    // const img = "profile.jpg"
    // const host = "http://localhost:7000"
    const initialPost = [];
    const [posts,setPosts] = useState(initialPost);


    const addPost = async (formdata) => {
        console.log(formdata);
        const response = await fetch({
            method:'post',
            body:formdata,
            headers:{"Content-Type":"multipart/form-data"},
        });
        const json = await response.json();
        console.log(json);
    }

    const fetchpost = async()=>{
        const res = await fetch('http://localhost:7000/api/post/fetchpost',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            }
        })
        const json_data = await res.json();
        setPosts(json_data[0]);
        console.log(json_data[0]);
    }



    return (
        <div>
            <postcontext.Provider value={{ posts,addPost ,fetchpost}}>
                {props.children}
            </postcontext.Provider>
        </div>
    )
}

export default Poststate
