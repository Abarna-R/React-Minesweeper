import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Form extends Component {
  state = {
    title: ''
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addName(this.state.title);
    this.setState({ title: '' });
    console.log(123);
  }

  onChange(e) { this.setState({ [e.target.name]: e.target.value });}

  render() {
    return (
      <div>
      <br></br>
      <div className="jumbotron">
        <br></br>
      <form className="text-center">
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Name" 
          value={this.state.title}
          onChange={this.onChange.bind(this)}
        />
        <button
            onClick={this.onSubmit.bind(this)}> <Link to="/play">submit</Link>
          </button>
      </form>
      </div></div>
    )
  }
}
export default Form
