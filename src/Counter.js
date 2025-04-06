import { useState } from "react"; // Import React and useState Hook

// Define the Counter functional component
function Counter() {
  // --- State Declaration ---
  // Call useState to declare a state variable 'count'
  // Initialize it with 0
  // Get the current value 'count' and the setter function 'setCount'
  const [count, setCount] = useState(0);

  // --- Event Handlers ---
  // Function to handle the increment button click
  function increment() {
    // Update state using the setter function
    // Pass the new value (current count + 1)
    setCount(count + 1);
    // Note: Using functional update setCount(prevCount => prevCount + 1) is safer
    // if the new state depends on the previous state, especially with async updates.
  }

  // Function to handle the decrement button click (Optional addition)
  function decrement() {
    setCount(count - 1);
    // Or safer: setCount(prevCount => prevCount - 1);
  }

  // --- Render JSX ---
  return (
    <div style={{ border: "1px solid lightblue", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Counter Example</h2>
      {/* Display the current value of the 'count' state variable */}
      <p>You clicked {count} times</p>
      {/* Attach the increment function to the button's onClick event */}
      <button
        onClick={increment}
        style={{ marginRight: "5px" }}
      >
        Increment +
      </button>
      {/* Attach the decrement function */}
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}

// Export the component
export default Counter;
