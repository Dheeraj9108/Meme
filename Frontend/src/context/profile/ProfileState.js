import React, { useState } from 'react'
import profileContext from './profilecontext'

const ProfileState = (props) => {
  const host = 'http://localhost:7000'
  const initialProfile = []
  const [profile, setProfile] = useState(initialProfile);
 

  const getProfile = async () => {
    const response = await fetch(`${host}/api/auth/getUser`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5YzQyZWE5NzQwOGYxNzI1MTU1NmMzIn0sImlhdCI6MTY1NDQwODc2N30.H11AFJW6Uogfhv2ScnLIzAFNz8YW8EtxSu6dMCPNv9s"
      }
    })
    const json = await response.json();
    setProfile(json[0]);
  }
  const editProfile = async (name,description) => {
    const response = await fetch(`${host}/api/auth/updateprofile/629ca23b3eeb296ac2e6767f`, {
      method: 'PUT',
      headers:{
        "Content-Type":"application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5Y2EyM2IzZWViMjk2YWMyZTY3NjdmIn0sImlhdCI6MTY1NDQzMjMxNX0.rDGlaJXatOcyEXFucXNJNp1NMMUz5L607oedqG_AKaY"
      },
      body:JSON.stringify({name,description})
    });
    const json = await response.json();
    setProfile(json);
  }
  return (
    <profileContext.Provider value={{ profile, getProfile, editProfile ,setProfile}}>
      {props.children}
    </profileContext.Provider>
  )
}

export default ProfileState
