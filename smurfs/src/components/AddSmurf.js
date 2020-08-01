import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

import axios from 'axios';

const AddSmurf = props => {
    const [smurfForm, setSmurfForm] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })
    const [post, setPost] = useState([]);

    const handleChange = e => {
        setSmurfForm({
            ...smurfForm,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(smurfForm);
        setSmurfForm({
            name: '',
            age: '',
            height: '',
            id: Date.now()
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                <input
                id='name'
                type='text'
                name='name'
                value={smurfForm.name}
                placeholder='Name'
                onChange={handleChange}
                 />
                </label>
            <label htmlFor='age'>
                <input
                type='text'
                name='age'
                value={smurfForm.age}
                placeholder='Age'
                onChange={handleChange}
                 />
            </label>
            <label htmlFor='height'>
                <input
                type='text'
                name='height'
                value={smurfForm.height}
                placeholder='Height'
                onChange={handleChange}
                 />
            </label>
            <button className='add-smurf' >Add Smurf</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    {
        addSmurf
    }
)(AddSmurf);