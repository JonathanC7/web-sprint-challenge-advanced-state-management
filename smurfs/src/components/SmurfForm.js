import React from 'react';

import { connect } from 'react-redux';

const SmurfForm = props => {
    return (
        <div className='smurf-container'>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
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
)(SmurfForm);