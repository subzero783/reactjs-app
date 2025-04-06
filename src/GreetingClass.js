import React from "react"; // Import React is necessary for React.Component

// Define the GreetingClass component using ES6 class syntax
// It MUST extend React.Component
class GreetingClass extends React.Component {
  // Class components MUST have a render() method
  render() {
    // Props are accessed via 'this.props' inside class components
    const name = this.props.name;

    // The render() method returns the JSX description of the UI
    return <h2>Hello, {name}! (from Class Component)</h2>;
  }
}

// Export the component
export default GreetingClass;
