import React, { useContext, useState } from 'react'
import profileContext from '../../context/profile/profilecontext';

const ProfileModal = () => {

    const context = useContext(profileContext);
    const {editProfile} = context;

    const [eprofile,setEprofile] = useState({ename:"",edescription:""});

    const handleClick = (e)=>{
        e.preventDefault();
        editProfile(eprofile.ename,eprofile.edescription);
        alert("Updated Successfully")
    }

    const onchange=(e)=>{
        setEprofile({...eprofile, [e.target.name]: e.target.value})
    }

  return (
    <div className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload New Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="ename" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={onchange} name='ename' id="ename" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <input type="text" name='edescription' onChange={onchange} className="form-control" id="edescription" aria-describedby="emailHelp" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                        </form>
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

export default ProfileModal
