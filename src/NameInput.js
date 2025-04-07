import React, { useState } from "react";

// Demonstrates a basic controlled text input
function NameInput() {
  // 1. State to hold the input value
  const [name, setName] = useState("");

  // 3. onChange handler to update state
  function handleChange(event) {
    // Get the new value from the event object
    const newValue = event.target.value;
    // Update the state using the setter function
    setName(newValue);
    console.log("Input changed:", newValue); // Log changes
  }

  console.log("Rendering NameInput, name is:", name);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Simple Controlled Input</h2>
      <label>Name: </label>
      <input
        type="text"
        value={name} // 2. Input's value is tied to the 'name' state
        onChange={handleChange} // 3. Call handleChange when input changes
        placeholder="Enter your name"
        style={{ marginLeft: "5px" }}
      />
      <p style={{ marginTop: "10px", minHeight: "1.2em" }}>
        {" "}
        {/* Added minHeight */}
        Current Name in State: <strong>{name || "(empty)"}</strong>
      </p>
    </div>
  );
}

export default NameInput;
