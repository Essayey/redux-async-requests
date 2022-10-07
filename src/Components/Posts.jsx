import React from 'react'
import PostItem from './PostItem'
import PostList from './PostList'

const Posts = () => {
    return (
        <div className='Container'>
            <h1 style={{ textAlign: 'center' }}>Posts page</h1>
            <PostList />
        </div>
    )
}

export default Posts