import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useOutsideCallback } from '../hooks/useOutsideCallback';
import { addPost } from '../store/postReducer';

const AddModal = ({ onHide }) => {
    const windowRef = useRef();
    useOutsideCallback(onHide, windowRef);

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submit = e => {
        e.preventDefault();
        dispatch(addPost({ title, body }))
    }

    return (
        <div className='AddModal'>
            <div ref={windowRef} className='AddModal__window'>
                <h2 style={{ textAlign: 'center' }}>Add post</h2>
                <form onSubmit={submit} className="AddModal__form">
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" type="text" />
                    <textarea value={body} onChange={e => setBody(e.target.value)} placeholder='Body'></textarea>
                    <button>Add post</button>
                </form>
            </div>
        </div>
    )
}

export default AddModal