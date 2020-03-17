import React, { Component } from "react";
import Card from "./Card";

const user = {};

class Credit extends Component {
  state = {
    name: "",
    number: "",
    valid: ""
  };
  upperName =(e)=>
  {
      this.setState({
          name:e.target.value.toUpperCase()
      })
  }
   renderCardNumber = number => {
    number = number.toString()
    // '7253325678951245'
    let resultStr = ''
    for(let i =0; i < number.length; i ++) {
    if((i+1) % 4 ===0){
    resultStr += number[i] +' '
  } 
  else resultStr+=number[i]


}
return resultStr
}
  cardNumFom =(e) =>{
      this.setState({
      number:e.target.value
      
  })}
  ValidThru = number => {
    number = number.toString()
    return number.slice(0, 2) + '/' + number.slice(2)
  }
  
  Validation =(e) =>{
      this.setState({
          valid:e.target.value
      })

  }
  render() {
    return (
      <div>
        <Card
          user={{
            company: "company name",
            name:this.state.name,
            number:this.renderCardNumber(this.state.number),
            valid:this.ValidThru (this.state.valid),
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            margin: "20px"
          }}
        >
          <input
            type="text"
            value={this.state.name}
            onChange={this.upperName}
            placeholder='Enter your name'
            maxLength='20'
          />
          <input type="text" onChange={this.cardNumFom}
          value={this.state.number}
          placeholder='Enter the card number'
          maxLength='16' />
          <input type="text" onChange={this.Validation}
          placeholder='enter the date' maxLength='4'/>
        </div>
      </div>
    );
  }
}
export default Credit;
