import React, { Component } from "react";
import "./FamousSection.css";

class FamousSection extends Component {
  state = {
    famousPerson: {
      name: "",
      role: "",
    },

    peopleList: [
      {
        name: "",
        role: "",
      },
    ],
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      },
    });
  };

  addPerson = (event) => {
    event.preventDefault();
    console.log(`The famous person is `, this.state.famousPerson);
    // clearing form inputs
    const newStateConfig = {
      famousPerson: {
        name: "",
        role: "",
      },

      // update people list
      peopleList: [
        ...this.state.peopleList,
        {
          ...this.state.famousPerson,
        },
      ],
    };
    // add famous person to the people list
    this.setState(newStateConfig, () => {
      console.log("New State:", this.state.peopleList);
    });
  };

  render() {
    const peopleElements = this.state.peopleList.map((item, index) => {
      return (
        <li key={index}>
          {item.name} is famous for {item.role}.
        </li>
      );
    });

    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            onChange={(event) => this.handleChangeFor(event, "name")}
          />
          <label htmlFor="role-input">Famous for:</label>
          <input
            id="role-input"
            onChange={(event) => this.handleChangeFor(event, "role")}
          />
          <button type="submit">Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "
          {this.state.famousPerson.role}".
        </p>
        <ul>{peopleElements}</ul>
      </section>
    );
  }
}

export default FamousSection;
