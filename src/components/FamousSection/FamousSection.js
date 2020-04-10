import React, { Component } from "react";
import "./FamousSection.css";

class FamousSection extends Component {
  state = {
    famousPerson: {
      name: "",
      role: "",
    },

    people: [],
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
    //clear input fields
    event.target.reset();
    console.log(`The famous person is `, this.state.famousPerson);

    const newStateConfig = {
      famousPerson: {
        name: "",
        role: "",
      },

      // update people
      people: [
        ...this.state.people,
        {
          ...this.state.famousPerson,
        },
      ],
    };
    // add famous person to the people array
    this.setState(newStateConfig, () => {
      console.log("New State:", this.state.people);
    });
  };

  render() {
    const peopleElements = this.state.people.map((item, index) => {
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
        <p>{peopleElements}</p>
      </section>
    );
  }
}

export default FamousSection;
