import React, { useState } from 'react'
import axios from 'axios';
const Temp = () => {

    const [userInfo, setUserInfo] = useState({
        file: [],
        description:""
    });

    const handleInputChange = (e) => {
        setUserInfo({ ...userInfo, file: e.target.files[0] })
    }
    const dhandle = (e) => {
        setUserInfo({ ...userInfo, description: e.target.value})
    }
    const submit = async (e) => {
      
        const formdata = new FormData();
        const desc = document.getElementById('desc').value;
        formdata.append('avatar', userInfo.file);
        formdata.append('description',desc);
        console.log(desc)
        const res = await axios.post("http://localhost:7000/upload", formdata, {
            headers: { 
                "Content-Type": "multipart/form-data",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY" 
            },
        });
        console.log(res.data);
        document.getElementById('file_upload').value = '';
    }
    return (
        <div  id='myForm' className='form-group'>
            <div className="mb-3">
                <label htmlFor="file_upload" className="form-label">Upload</label>
                <input type="file" onChange={handleInputChange} name='userPost' className="form-control" id="file_upload" />
            </div>
            <div className="mb-3">
                <label htmlFor="file_upload" className="form-label">Upload</label>
                <input type="text" onChange={dhandle} name='userPost' className="form-control" id="desc" />
            </div>
            <button type="submit" onClick={()=>submit()} className="btn btn-primary">Submit</button>
           
        </div>
    )
}

export default Temp
