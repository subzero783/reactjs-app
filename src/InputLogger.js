import { useState } from "react";

// Demonstrates handling the onChange event for controlled input
function InputLogger() {
  const [text, setText] = useState("");

  // Handler receives the synthetic event object automatically
  function handleChange(event) {
    // Access the input element via event.target
    // Access its current value via event.target.value
    const currentValue = event.target.value;
    console.log("Input value:", currentValue);
    setText(currentValue); // Update state to keep input controlled
  }

  console.log("Rendering InputLogger. Current text:", text);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Input onChange Handler</h2>
      <label>
        Type here:
        <input
          type="text"
          value={text} // Input value controlled by state
          onChange={handleChange} // Attach the handler function
          placeholder="Type something..."
          style={{ marginLeft: "5px" }}
        />
      </label>
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Check console as you type)</p>
    </div>
  );
}

export default InputLogger;
