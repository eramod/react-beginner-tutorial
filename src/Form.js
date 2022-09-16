import React, { Component } from "react";

/**
 * Our goal for this form will be to update the state of Form every time a field
 * is changed in the form, and when we submit, all that data will pass to the
 * App state, which will then update the Table.
 */
class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  /**
   * Make the function that will run every time a change is made to an input.
   * The event will be passed through, and we'll set the state of Form to have
   * the name (key) and value of the inputs.
   */
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
