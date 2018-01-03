import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
    constructor(prop) {

       super(prop);
    }
    render() {
        return (
            <div className="cotainer">
                <div className="notification">
                  {this.props.count}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
   return {
    count: state.counterReducer,
  };
}


export default connect(mapStateToProps)(Counter);


