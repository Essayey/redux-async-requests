import React from 'react'

const PostItem = ({ number, body, title }) => {
    return (
        <div className='PostItem'>
            <h3>{number}. {title}</h3>
            <span style={{ fontSize: 14 }}>{body}</span>
        </div>
    )
}

export default PostItem