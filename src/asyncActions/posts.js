import { addManyPosts } from "../store/postReducer"

export const fetchPosts = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => dispatch(addManyPosts(posts)))
    }
}