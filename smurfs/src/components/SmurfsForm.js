import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { postData } from '../actions';


const SmurfsForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChangesName = e => {
    setSmurf({ ...smurf, name: e.target.value });
  };

  const handleChangesAge = e => {
    setSmurf({ ...smurf, age: parseInt(e.target.value) });
  };

  const handleChangesHeight = e => {
    setSmurf({ ...smurf, height: e.target.value + " inches" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postData(smurf);

    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={smurf.name}
        placeholder="Name"
        onChange={handleChangesName}
      />
      <input
        type="number"
        name="age"
        value={smurf.age}
        placeholder="Age"
        onChange={handleChangesAge}
      />
      <input
        type="text"
        name="height"
        value={smurf.hieght}
        placeholder="Height"
        onChange={handleChangesHeight}
      />
      <button>Add this Smurf!</button>
    </form>
  );
};

// export default SmurfsForm;
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postData })(SmurfsForm);