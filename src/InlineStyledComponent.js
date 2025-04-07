import { useState } from "react";

// Demonstrates using inline styles
function InlineStyledComponent() {
  const [isActive, setIsActive] = useState(false);

  // 1. Define a style object
  // Style properties are camelCased
  // Values are typically strings (numbers sometimes work for pixels)
  const componentStyle = {
    color: isActive ? "darkgreen" : "darkslategrey", // Dynamic color based on state
    backgroundColor: isActive ? "#e8f5e9" : "#f8f8f8", // camelCase property name
    padding: "20px", // String value with unit
    border: "2px solid", // Border shorthand
    borderColor: isActive ? "darkgreen" : "darkslategrey", // Dynamic border color
    borderRadius: 8, // Number value might work for px
    marginTop: "15px", // String value preferred
    fontFamily: "sans-serif", // Added for consistency
  };

  console.log("Rendering InlineStyledComponent. isActive:", isActive);

  return (
    // 2. Pass the style object to the 'style' prop
    <div style={componentStyle}>
      <h2>Inline Styles Example</h2>
      <p>This component uses inline styles!</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <button onClick={() => setIsActive((a) => !a)}>Toggle Active Style</button>

      {/* You can also define styles directly inline using double curly braces */}
      {/* Outer {} for JSX expression, inner {} for the style object literal */}
      <p style={{ fontSize: "0.9em", fontStyle: "italic", marginTop: 10 }}>(Style object passed to style prop)</p>
    </div>
  );
}

export default InlineStyledComponent;
