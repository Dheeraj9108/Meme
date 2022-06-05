import React from 'react'
import postcontext from './postcontext'

const Poststate = (props) => {

    const addPost = async (description, img) => {
        const response = await fetch('http://localhost:7000', {
            method: 'POST',
            headers: {
                 "Content-Type": "application-json",
                "auth-token": ""
            },
            body: JSON.stringify({ description, img })
        })
        const post =  response.json();
        console.log(post);
    }
    


    return (
        <div>
            <postcontext.Provider value={{addPost}}>
                {props.children}
            </postcontext.Provider>
        </div>
    )
}

export default Poststate
