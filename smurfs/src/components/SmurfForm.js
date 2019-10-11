import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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
        props.addSmurf(newSmurf)
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (<>
    <form onSubmit={submitHandler}>
        <input
        name='name'
        type="text"
        value={newSmurf.name}
        onChange={(e) => changeHandler(e)}
        placeholder="Add new smurf"
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
            smurf: state.smurf,
            test: state.test
        };
      } ;

export default connect(mapStateToProps,{addSmurf})(SmurfForm); 