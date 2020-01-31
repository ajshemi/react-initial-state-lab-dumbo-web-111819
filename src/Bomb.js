// your Bomb code here!
import React, {Component} from 'react'

export default class ImageSlider extends Component{
    
    
    state={
        secondsLeft:this.props.initialCount
    }

    render(){
      return  <h1>{this.state.secondsLeft===0 ? "Boom!" : this.state.secondsLeft+" seconds left before I go boom!"}</h1> 
    }
}