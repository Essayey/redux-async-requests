import React, { useEffect, useState } from 'react'
import AddModal from './AddModal';
import PostItem from './PostItem'
import PostList from './PostList'

const Posts = () => {
    const [postAdding, setPostAdding] = useState(false);


    return (
        <div className='Container'>
            <h1 style={{ textAlign: 'center' }}>Posts page</h1>
            <PostList />
            <button onClick={() => setPostAdding(true)}>Add post</button>
            {postAdding &&
                <AddModal onHide={() => setPostAdding(false)} />}
        </div>
    )
}

export default Posts