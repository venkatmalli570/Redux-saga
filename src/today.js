import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";


class Today extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
   
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Today);
