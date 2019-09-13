import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import { postData } from '../actions';

const Smurf = (props) => {
  return (
      <div>
          <h3>{props.smurf.name} Smurf</h3>
          <p>age: {props.smurf.age}</p>
          <p>height:{props.smurf.height}</p>
      </div>
  )
}

const SmurfsList = props => {
  console.log("Number Smurfs in list (State)  : ", props.smurfs);
  return (
    <div>
      <h2>Look at all these Smurfs!!!</h2>
      <button onClick={() => props.getData()}>
        Click here to see the Smurfs list
      </button>
      
      <span>Check the Console for state and press the button for state update</span>
      {props.smurfs && 
                props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData, postData }
)(SmurfsList);