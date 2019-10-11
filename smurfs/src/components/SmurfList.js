import React from 'react';
import {connect} from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {getSmurf} from '../actions';

const SmurfList = props => {
    return (<>
    <h1>Look at these Smurfs</h1>
    <h1>{props.test}
    </h1>
    <button onClick={props.getSmurf}>
        </button>
        {props.chars && props.chars.map(info => (
            <Smurfs key={info.name} char={info} />
        ))}

        <SmurfForm />
    </>
    )}

//connecting to the redux store
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        chars: state.chars,
        test: state.test
    };
  } ;


export default connect(mapStateToProps,{getSmurf})(SmurfList); 