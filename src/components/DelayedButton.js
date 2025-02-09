// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  
  anotherFunction = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e), this.props.delay
    })

  }
  
  render() {
    return (
      <button onClick={this.anotherFunction}>Hello</button>
    )
  }

}