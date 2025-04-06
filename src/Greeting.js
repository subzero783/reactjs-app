// Define the Greeting functional component
// It accepts a single argument: the 'props' object
function Greeting(props) {
  // props is an object containing data passed from the parent.
  // Example: if used as <Greeting name="Alice" />, props would be { name: "Alice" }

  // We access the passed data using dot notation (props.propertyName)
  return <h2>Hello, {props.name}! (from Functional Component)</h2>;
}

// Export the component
export default Greeting;
