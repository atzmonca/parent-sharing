import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter,decrementCounter } from './testActions'
import {Button  } from 'semantic-ui-react'

const mapState = (state)=>({
    data:state.test.data
})

const actions = {
incrementCounter,
decrementCounter
}

class TestComponent extends Component {
  render() {
    const {incrementCounter,decrementCounter,data} = this.props;
    return (
      <div>
      <h3>The answer is: {data}</h3>
      <Button onClick={incrementCounter} color='green'>Increment</Button>
      <Button onClick={decrementCounter} color='red'>Decrement</Button>


      </div>
    )
  }
}
export default connect(mapState,actions) (TestComponent)