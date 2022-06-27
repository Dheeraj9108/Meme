import React, { useContext,useEffect } from 'react'
import commentContext from '../context/comment/conmmentContext'
import Commentform from './Commentform'
import Commentitem from './Commentitem'

const Comment = (props) => {

    const cmnt = useContext(commentContext);
    // const { comment,getComment } = cmnt;


    // useEffect(() => {
    //     getComment(props.post._id);
    //     // eslint-disable-next-line 
    // }, [])

    const postid = props.post._id
    return (
        <div>
            <Commentform postid={postid}/>
            {/* <Commentitem /> */}
            {props.post.comments.map((cmnt) => {
                return <Commentitem postid={postid} cmnt={cmnt}/>
            })}
        </div>
    )
}

export default Comment
