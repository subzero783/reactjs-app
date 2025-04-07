import { useState } from "react";

// Demonstrates boolean state for toggling UI
function ToggleVisibility() {
  // State variable 'isVisible', starts as true
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the state using a functional update
  function handleToggle() {
    // Pass a function to the setter: receives the previous state
    // and returns the new state (! flips the boolean)
    setIsVisible((currentVisibility) => !currentVisibility);
  }

  return (
    <div style={{ border: "1px solid pink", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Toggle Visibility Example (useState)</h2>
      <button onClick={handleToggle}>
        {/* Change button text based on state */}
        {isVisible ? "Hide" : "Show"} Details
      </button>

      {/* Conditionally render the paragraph using logical AND (&&) */}
      {/* If isVisible is true, the element after && is rendered */}
      {isVisible && <p style={{ marginTop: "10px" }}>Here are the secret details!</p>}
    </div>
  );
}

export default ToggleVisibility;
