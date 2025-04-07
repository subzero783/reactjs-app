import React, { useState } from "react";

// This component handles a sign-up form with multiple controlled inputs
function SignUpForm() {
  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false); // State for checkbox

  // --- Event Handlers ---

  // Updates the 'name' state when the name input changes
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Updates the 'email' state when the email input changes
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Updates the 'agreed' state when the checkbox changes
  function handleAgreeChange(event) {
    // For checkboxes, we read event.target.checked (a boolean)
    setAgreed(event.target.checked);
  }

  // Handles the form submission
  function handleSubmit(event) {
    // Prevent the default browser form submission (which causes a page reload)
    event.preventDefault();

    // Gather the current state values into an object
    const formData = {
      name: name,
      email: email,
      agreed: agreed,
    };

    // Log the data to the console (in a real app, you'd send this to a server)
    console.log("Form Submitted Data:", formData);
    alert(`Thanks, ${name}! You agreed: ${agreed}. Check ${email} for confirmation (not really!).`);

    // Conceptual: Send data to an API endpoint like JSONPlaceholder
    /*
    fetch('https://jsonplaceholder.typicode.com/users', { // Example endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log('API Response:', data))
    .catch(error => console.error('API Error:', error));
    */

    // Optional: Clear the form fields after submission by resetting state
    setName("");
    setEmail("");
    setAgreed(false);
  }

  // --- Basic Inline Styles (for demonstration) ---
  // In a real app, prefer using CSS files or CSS-in-JS libraries
  const formStyle = { maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", fontFamily: "sans-serif", textAlign: "left" };
  const divStyle = { marginBottom: "15px" };
  const labelStyle = { marginRight: "5px", display: "inline-block", width: "50px", textAlign: "right", verticalAlign: "middle" };
  const inputStyle = { padding: "5px", marginLeft: "5px", width: "calc(100% - 70px)", boxSizing: "border-box", verticalAlign: "middle" };
  const checkboxLabelStyle = { display: "flex", alignItems: "center", width: "100%" };
  const checkboxStyle = { marginRight: "10px", width: "auto", verticalAlign: "middle" };
  const buttonStyle = { marginTop: "10px", padding: "8px 15px", cursor: "pointer", backgroundColor: "#61dafb", border: "none", borderRadius: "4px", color: "black" };
  const disabledButtonStyle = { ...buttonStyle, backgroundColor: "#ccc", cursor: "not-allowed" };

  // --- Render the form ---
  return (
    <div style={formStyle}>
      <h2>Sign Up Form Example</h2>
      {/* Attach the submit handler to the form's onSubmit event */}
      <form onSubmit={handleSubmit}>
        {/* Name Input Field */}
        <div style={divStyle}>
          <label style={labelStyle}>Name: </label>
          <input
            type="text"
            value={name} // Controlled component: value comes from state
            onChange={handleNameChange} // Update state on change
            required // Basic HTML5 validation
            style={inputStyle}
          />
        </div>

        {/* Email Input Field */}
        <div style={divStyle}>
          <label style={labelStyle}>Email: </label>
          <input
            type="email"
            value={email} // Controlled component
            onChange={handleEmailChange} // Update state on change
            required // Basic HTML5 validation
            style={inputStyle}
          />
        </div>

        {/* Checkbox Input Field */}
        <div style={divStyle}>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              checked={agreed} // Controlled component: checked comes from state
              onChange={handleAgreeChange} // Update state on change
              style={checkboxStyle}
            />
            I agree to the terms and conditions.
          </label>
        </div>

        {/* Submit Button - disabled if terms are not agreed */}
        <button
          type="submit"
          disabled={!agreed} // Button is disabled if 'agreed' state is false
          style={agreed ? buttonStyle : disabledButtonStyle} // Apply different style when disabled
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

// Export the component so App.jsx can import it
export default SignUpForm;
