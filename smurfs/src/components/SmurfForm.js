import React, {useState} from 'react';
import {getSmurf} from '../actions'
import { connect } from 'react-redux';

const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '', 
        height: ''
    })

    const changeHandler = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
        console.log(newSmurf, 'newsmurf')
    }

    const submitHandler = e => {
        e.preventDefault();
        props.getSmurf(newSmurf)
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
    }
    console.log('smurfs')
    return (<>
    <form onSubmit={submitHandler}>
        <input
        name='name'
        type="text"
        value={newSmurf.name}
        onChange={(e) => changeHandler(e)}
        placeholder="Add new member"
        />
        <input
        name='age'
        type="text"
        value={newSmurf.age}
        onChange={changeHandler}
        placeholder="Add age"
        />
        <input
        name='height'
        type="text"
        value={newSmurf.height}
        onChange={changeHandler}
        placeholder="Add height"
        />
        <button type="submit">Submit</button>
        </form>

    </>
    )}

    const mapStateToProps = state => {
        return {
            isLoading: state.isLoading,
            chars: state.chars,
            test: state.test
        };
      } ;

export default connect(mapStateToProps,{getSmurf})(SmurfForm); 