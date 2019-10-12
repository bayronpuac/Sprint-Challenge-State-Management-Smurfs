import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../actions/index';

import Smurfs from './Smurfs';

const SmurfList = props => {
  useEffect(()=> {
    props.getSmurf();
  },[]);
  if (props.isFetching) {
    return <h2> Loading Smurfs .......</h2>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurf.map(item => (
        <Smurfs key={item.id} item={item} height={item.height} name={item.name} age={item.age} />
      ))}
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getSmurf})(SmurfList);