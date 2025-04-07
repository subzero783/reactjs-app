import React, { useState } from "react";

// Demonstrates object state and immutable updates
function UserSettings() {
  // Initialize state with an object
  const [settings, setSettings] = useState({ theme: "light", fontSize: 12 });

  // Function to update only the theme property
  function switchToDark() {
    // Update state IMMUTABLY using the setter function
    setSettings((prevSettings) => ({
      // Return a NEW object literal
      ...prevSettings, // 1. Copy all properties from previous settings using spread syntax
      theme: "dark", // 2. Overwrite only the 'theme' property
    }));
    // DO NOT DO THIS (mutation):
    // const newSettings = settings;
    // newSettings.theme = 'dark';
    // setSettings(newSettings); // This might not trigger re-render reliably
  }

  // Function to increase font size
  function increaseFontSize() {
    // Also uses functional update and spread syntax for immutability
    setSettings((prevSettings) => ({
      ...prevSettings, // Copy existing settings
      fontSize: prevSettings.fontSize + 1, // Update font size based on previous
    }));
  }

  return (
    <div style={{ border: "1px solid #eee", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>User Settings Example (useState with Object)</h2>
      <p>Theme: {settings.theme}</p>
      <p>Font Size: {settings.fontSize}px</p>
      <button
        onClick={switchToDark}
        style={{ marginRight: "5px" }}
      >
        Use Dark Theme
      </button>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Updating object state requires creating a new object)</p>
    </div>
  );
}

export default UserSettings;
