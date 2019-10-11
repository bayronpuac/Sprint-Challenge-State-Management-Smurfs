import React from 'react';

const Smurfs = props => {
    console.log('smurfs', props.char.name)
    return (<>
    <h1>{props.char.name}</h1>
    </>
    )}

export default (Smurfs); 