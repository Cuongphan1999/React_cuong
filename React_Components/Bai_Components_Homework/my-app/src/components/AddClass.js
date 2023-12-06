import { Component } from "react";
class AddClass extends Component {
  render() {
    return <h1>Total Add class: {this.props.firstNumber + this.props.secondNumber}</h1>;
  }
}
export default AddClass;