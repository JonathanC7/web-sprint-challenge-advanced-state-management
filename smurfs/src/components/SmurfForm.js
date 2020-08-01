import React from 'react';

import { connect } from 'react-redux';

const SmurfForm = props => {
    console.log('SmurfForm props.smurf', props.smurf)
    return (
        <div className='smurf-container'>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
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