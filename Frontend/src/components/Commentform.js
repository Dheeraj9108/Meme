import React from 'react'

const Commentform = () => {
    return (
        <div className="collapse" id="collapseExample">
            <p>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Comment... </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder='comment.....' aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </p>
        </div>
    )
}

export default Commentform
