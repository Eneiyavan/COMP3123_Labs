import { Component } from "react";

class Student extends Component {
  constructor(props) {
    // First line of code in constructor when you have inheritance
    // Child constructor must always call the parent constructor
    super(props);

    // Regular class property - not a class component state
    this.classProperty = "some prop value";

    // Store the internal data into state
    this.state = {
      studentNumber: props.studentNumber, // Validate before saving into state
      firstName: "Eneiyavan"
    }

    this.showMessage = this.showMessage.bind(this);
  }

  // Regular method for the class
  showMessage() {
    alert("Welcome to the website " + this.state.firstName);
  }

  // Define a method using arrow syntax - this keyword binds automatically
  incrementEventHandler = () => {
    this.classProperty = this.classProperty + ". The rest of the value string.";
    console.log(this.classProperty);
    this.setState({ studentNumber: this.state.studentNumber + 1 });
  }

  eventHandler = (event) => {
    console.log(event);
    console.log(event.target.name + " : " + event.target.value);
  }

  readName = (event) => {
    this.setState({ firstName: event.target.value });
  }

  render() {
    return (
      <article>
        <h2> Student Component </h2>
        <p> classProperty: {this.classProperty} </p>
        <p> studentNumber {this.state.studentNumber} </p>
        <p> Whole state object {JSON.stringify(this.state)} </p>

        <input name="firstname" onChange={this.readName} />
        <br />
        <button onClick={this.incrementEventHandler}> Add </button>
        <button name="btnEvent" value="Event"
          onClick={(event) => this.eventHandler(event)}>
          Show Event
        </button>
        <button onClick={this.showMessage}> Click Me </button>
      </article>
    );
  }

  // Old lifecycle methods
  componentDidMount() {
    console.log("The component was mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("The component should update to : " + JSON.stringify(nextState));
    return true;
  }

  componentDidUpdate() {
    console.log("The component was updated");
  }

  componentWillUnmount() {
    console.log("The component is about to unmount");
  }
}

export default Student;