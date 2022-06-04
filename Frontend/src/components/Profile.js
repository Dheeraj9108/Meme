import React from 'react'
import Postitem from "./Postitem"

const Profile = () => {
    return (
        <>
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" className="img-fluid " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Poojary Dheeraj Kumar</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut autem accusantium assumenda unde magnam maxime quisquam nobis consectetur enim quaerat dolorem nesciunt voluptas, in quibusdam. Quia ea alias dolorem provident, atque eveniet sed tenetur repudiandae mollitia ullam architecto recusandae facere repellendus voluptatibus veniam. Amet incidunt eius quisquam eveniet! Totam, nulla.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-center">
                        <button className='btn btn-primary'>Edit Profile</button>
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
