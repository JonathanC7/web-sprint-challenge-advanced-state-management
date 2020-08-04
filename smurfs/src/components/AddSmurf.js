import React, { useState } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';


const AddSmurf = props => {
    const [smurfForm, setSmurfForm] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })
const [error, setError] = useState('');

    let handleChange = e => {
        setSmurfForm({ 
            ...smurfForm,
            [e.target.name]: e.target.value })
    }
    let handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhst:3333/smurfs', smurfForm)
        .then(res => {
            console.log('response: ', res);
            console.log('res.data: ', res.data);
        })
        .catch(err => {
            setError(err.message)
        })
        setSmurfForm({
            name: '',
            age: '',
            height: '',
            id: Date.now()
        })
    }
    return (
        <form>
            <label htmlFor='name'>
                <input
                className='input'
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
                className='input'
                id='age'
                type='text'
                name='age'
                value={smurfForm.age}
                placeholder='Age'
                onChange={handleChange}
                 />
            </label>
            <label htmlFor='height'>
                <input
                className='input'
                id='height'
                type='text'
                name='height'
                value={smurfForm.height}
                placeholder='Height'
                onChange={handleChange}
                 />
            </label>
            <p className='error'>{error}</p>
            <button className='add-smurf' onClick={handleSubmit}>Add Smurf</button>
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
    
    }
)(AddSmurf);