import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../asyncActions/posts'
import PostItem from './PostItem'

const PostList = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            {
                posts.map((post, index) =>
                    <PostItem key={post.id} number={index + 1} body={post.body} title={post.title} />
                )
            }

        </div>
    )
}

export default PostList