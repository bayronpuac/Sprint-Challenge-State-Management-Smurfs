import React from 'react';
import {connect} from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {getSmurf} from '../actions';

const SmurfList = props => {
    return (<>
    <h1>Look at these smurf!</h1>
    <h1>{props.test}
    </h1>
        {props.smurf && props.smurf.map(item => (
            <Smurfs key={item.id} item={item} />
        ))} 
        <SmurfForm />
    </>
    )}

//connecting to the redux store
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurf: state.smurf,
        test: state.test
    };
  } ;


export default connect(mapStateToProps,{getSmurf})(SmurfList); 