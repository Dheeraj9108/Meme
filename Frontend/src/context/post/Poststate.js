import React from 'react'
import postcontext from './postcontext'

const Poststate = (props) => {
    // const img = "profile.jpg"
    // const host = "http://localhost:7000"
    const addPost = async (description,img) => {

        const response = await fetch(`http://localhost:7000/addpost`, {
            method: 'POST',
            headers: {
                "Content-Type": "mutipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            },
            body:JSON.stringify({description}),
            file:{
                "fieldname":"userPost",
                "originalname":`${img}`,
                "encoding":"7bit",
                "mimetype":"image/png"
            }
          
        })
        const json = await response.json();
        console.log(json);
    }



    return (
        <div>
            <postcontext.Provider value={{ addPost }}>
                {props.children}
            </postcontext.Provider>
        </div>
    )
}

export default Poststate
