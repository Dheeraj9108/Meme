import React, { useContext, useEffect } from 'react'
import Postitem from "./Postitem"
import PostModal from "./Modal/PostModal"
import profileContext from '../context/profile/profilecontext'
import ProfileModal from './Modal/ProfileModal'
const Profile = () => {

    const context = useContext(profileContext);
    const {profile,getProfile} = context;

    

    useEffect(()=>{
        getProfile();
         // eslint-disable-next-line 
    },[])



    return (
        <>
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img  src={profile.img} className="profile_img img-fluid " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{profile.name}</h5>
                            <p className="card-text">{profile.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-around">
                    <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profileModal">
                        Edit Profile</button>
                        <ProfileModal />
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Upload New Post</button>
                        <PostModal/>
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
