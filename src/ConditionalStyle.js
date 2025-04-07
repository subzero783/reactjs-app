import { useState } from "react";
// Import the CSS file containing the classes we'll use
// This assumes ConditionalStyle.css is in the same folder
import "./ConditionalStyle.css";
// You could also use CSS Modules here:
// import styles from './ConditionalStyle.module.css';
// Then use className={styles.panel} etc.

// Demonstrates applying styles and classes conditionally
function ConditionalStyle({ initialActive = false }) {
  // Accept an initial state via prop
  // State to toggle conditional styles/classes
  const [isActive, setIsActive] = useState(initialActive);
  // Another state to demonstrate combining conditions
  const [useHighlight, setUseHighlight] = useState(false);

  console.log(`Rendering ConditionalStyle. isActive: ${isActive}, useHighlight: ${useHighlight}`);

  // --- Conditional Inline Style ---
  // Create a style object where some properties depend on state
  // This approach is good for highly dynamic styles tied directly to JS logic
  const dynamicTextStyle = {
    fontSize: isActive ? "1.1em" : "1em", // Change font size based on 'isActive'
    // Color is now controlled by the CSS class 'text--highlight',
    // but we could add it here too if needed:
    // color: useHighlight ? 'navy' : 'black'
    transition: "all 0.3s ease", // Add transition for smoothness
  };

  // --- Conditional Class Names ---
  // Build the className string based on state/props
  let panelClasses = "panel"; // Start with base class defined in ConditionalStyle.css

  // Add modifier class if isActive is true
  if (isActive) {
    panelClasses += " panel--active"; // Remember the space before the class name!
  }

  // Add highlight class if useHighlight is true
  if (useHighlight) {
    panelClasses += " text--highlight"; // Add another class conditionally
  }

  // NOTE: In real applications with many conditional classes,
  // the 'classnames' library is often used to make this cleaner:
  // import cn from 'classnames';
  // const panelClasses = cn('panel', {
  //   'panel--active': isActive,        // Add 'panel--active' class if isActive is true
  //   'text--highlight': useHighlight   // Add 'text--highlight' class if useHighlight is true
  // });

  // --- Render JSX ---
  return (
    // Apply the dynamically generated className string to the div
    <div className={panelClasses}>
      <h2>Conditional Styling Example</h2>

      {/* Apply the dynamic inline style object to the paragraph */}
      <p style={dynamicTextStyle}>
        This text changes style based on state. (Active: {String(isActive)}, Highlight: {String(useHighlight)})
      </p>

      {/* Buttons to toggle the state variables */}
      <button
        className="toggle-button"
        onClick={() => setIsActive((a) => !a)}
      >
        Toggle Active State (Prop)
      </button>
      <button
        className="toggle-button"
        onClick={() => setUseHighlight((h) => !h)}
      >
        Toggle Highlight Style (Internal)
      </button>
    </div>
  );
}

export default ConditionalStyle;
