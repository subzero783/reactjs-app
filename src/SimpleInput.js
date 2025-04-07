import { useState } from "react";

// Demonstrates string state with a controlled input
function SimpleInput() {
  // Initialize state with an empty string
  const [inputValue, setInputValue] = useState("");

  // Update state whenever the input value changes
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div style={{ border: "1px solid lightgreen", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Simple Input Example (useState)</h2>
      <label>
        Enter Text:
        <input
          type="text"
          value={inputValue} // Input value is controlled by state
          onChange={handleChange} // Update state on change
          style={{ marginLeft: "5px" }}
        />
      </label>
      <p style={{ marginTop: "10px" }}>Current Value: {inputValue}</p> {/* Display state */}
    </div>
  );
}

export default SimpleInput;
