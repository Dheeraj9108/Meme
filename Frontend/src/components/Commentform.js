import React from 'react'

const Commentform = () => {
    return (
        <div className="collapse" id="collapseExample">
           
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Comment... </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='comment.....' aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
           
        </div>
    )
}

export default Commentform
