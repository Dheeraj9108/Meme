import React from 'react'

const Commentitem = (props) => {
    return (
        <>
            <div className="collapse" id={`dheeraj${props.postid}`}>
                <div className="card card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">Poojary Dheeraj Kumar</h5>
                        <p className="card-text">1 year ago</p>
                    </div>
                   {props.cmnt.comment}
                </div>
            </div>
        </>
    )
}

export default Commentitem
