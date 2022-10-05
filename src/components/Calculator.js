import React, { Component } from 'react'
import Button from './Button'

export class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ans: 0
    }
    //this.getResult = this.getResult.bind(this)
  }

  getResult(){
    let v1=document.getElementById('val1').value;
    //let v2=document.getElementById('val2').value;
    //let op=document.getElementById('op').value;
    var ans;
    let op;
    let num;
    try {
      num = v1.match(/^\s*?\(?([-+]?\d+(\.\d+)?)\)?\s*([+\-*/])\s*\(?([-+]?\d+(\.\d+)?\)?)\s*$/)
      console.log(num)
      op = num[3]
    } catch (error) {
      this.setState({ans: 'Invalid expression'})
      return this.state.ans;
    }
    
    if (op === '+')
      {//ans = parseInt(v1)+parseInt(v2)
      ans = parseFloat(num[1])+parseFloat(num[4])
      }
    else if (op === '-')
      {ans = parseFloat(num[1])-parseFloat(num[4])}
    else if (op === '*')
      {ans = parseFloat(num[1])*parseFloat(num[4])}
    else if (op === '/')
      {ans = parseFloat(num[1])/parseFloat(num[4])}
    else 
      {ans = 'Invalid input'};
    console.log(ans);
    this.setState({ans: ans.toFixed(3)})
   
  }
  
  render() {
    return (
      <div>
      <h2>BASIC CALCULATOR</h2>
        <div><p>Enter your expression below</p><input id='val1'></input></div>
        {/* <div><p>Operation</p><input id='op'></input></div>
        <div><p>Val2</p><input id='val2'></input></div> */}
        <br></br>
        <button onClick={()=>this.getResult()}>Calculate</button>
        <p>Answer is {this.state.ans}</p>
      </div>
    )
  }
}

export default Calculator
