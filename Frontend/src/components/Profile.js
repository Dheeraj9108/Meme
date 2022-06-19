import React, { useContext, useEffect, useState } from 'react'
import Postitem from "./Postitem"
import PostModal from "./Modal/PostModal"
import profileContext from '../context/profile/profilecontext'
import ProfileModal from './Modal/ProfileModal'
const Profile = () => {

    const context = useContext(profileContext);
    const { profile, getProfile } = context;
    const [id,setId] = useState(null);



    useEffect(() => {
        getProfile();
        // eslint-disable-next-line 
    }, [])

    const idClick = async () => {
        const res = await fetch('http://localhost:7000/id', {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
            }
        })
        const data = await res.json();
        console.log(data);
        setId(data);
    }


    return (
        <>
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src={profile.img} className="profile_img img-fluid " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{profile.name}</h5>
                            <p className="card-text">{profile.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-around">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profileModal">
                            Edit Profile</button>
                        <ProfileModal />
                        <button type="button" className="btn btn-primary" onClick={idClick} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Upload New Post</button>
                        <PostModal id={id}/>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className="mb-2 d-flex align-items-center justify-content-center">
                <h1>Your Posts </h1>
            </div>
            {/* <hr /> */}
            <Postitem />
        </>
    )
}

export default Profile
