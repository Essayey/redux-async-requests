const initialState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }]
}


export const ADD_POST = 'ADD_POST';
export const ADD_MANY_POSTS = 'ADD_MANY_POSTS'
export const REMOVE_POST = 'REMOVE_POST';

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANY_POSTS:
            return { ...state, posts: [...state.posts, ...action.payload.posts] }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                { ...action.payload.post, id: state.posts.length + 1 }]
            }
        case REMOVE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }
        default:
            return state
    }
}


export const addPost = (post) => {
    return { type: ADD_POST, payload: { post } }
}

export const addManyPosts = (posts) => {
    return { type: ADD_MANY_POSTS, payload: { posts } }
}

export const removePost = (id) => {
    return { type: REMOVE_POST, payload: { id } }
}
