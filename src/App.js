import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${this.state.name}\nPhone: ${this.state.phone}\nEmail: ${this.state.email}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input className="submit" type="submit" value="Send" />
      </form>
    );
  }
}

export default NameForm;