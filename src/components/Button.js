import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           val1: 0,
           val2: 0,
           op: false,
           ans: false
        }
        this.handleClick = this.handleClick.bind(this)
      }

    handleClick(prop){
    let ans= 0;
    console.log(this.state.val1+" "+this.state.val2+" "+this.state.op+" "+prop)
    if (prop === '+' || prop === '-'){
        this.setState({op: prop})
    }
    if (prop === '='){
        if(this.state.op === '+')
        ans = parseInt(this.state.val1) + parseInt(this.setState.val2)
        else if (this.state.op === '-')
        ans = parseInt(this.state.val1) - parseInt(this.setState.val2)
        else
        ans = parseInt(this.state.val1) + parseInt(this.setState.val2)

    }

    if (this.state.op === false){
        this.setState(prevState => ({val1: prevState.val1+prop}))
        console.log("Val1 "+this.state.val1)
    }
    else{
        this.setState(prevState => ({val2: prevState.val2+prop}))
    }
    console.log(this.state.val1+" "+this.state.val2+" "+this.state.op)
    
  }
  render() {
    
    
    return (
      <div>
        <button onClick={() => this.handleClick(this.props.value)}>{this.props.value}</button>
        <div>
        
        </div>

      </div>
    )
  }
}

export default Button
