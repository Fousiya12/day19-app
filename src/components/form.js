import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    studentid: '',
    studentname: '',
    address:'',
    coursename:'',
  }

  state = this.initialState
  handleChange = (event) => {
    const {name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { studentid, studentname, address, coursename  } = this.state;
  
    return (
      <form>
        <label htmlFor="studentid">StudentID</label>
        <input
          type="text"
          name="studentid"
          id="studentid"
          value={studentid}
          onChange={this.handleChange} />
        <label htmlFor="studentname">StudentName</label>
        <input
          type="text"
          name="studentname"
          id="studentname"
          value={studentname}
          onChange={this.handleChange} />
          <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={this.handleChange} />
          <label htmlFor="coursename">CourseName</label>
        <input
          type="text"
          name="coursename"
          id="coursename"
          value={coursename}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default Form;