import React, { useState } from "react";

// Reinforces basic useState with numbers
function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  // Update state using the setter function
  // Using functional update is safer if new state depends on old
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div style={{ border: "1px solid lightblue", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Counter Example (useState)</h2>
      {/* Read state value */}
      <p>Count: {count}</p>
      {/* Attach handlers */}
      <button
        onClick={increment}
        style={{ marginRight: "5px" }}
      >
        +
      </button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
