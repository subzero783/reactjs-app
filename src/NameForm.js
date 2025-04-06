import { useState } from "react"; // Import React and useState Hook

// Define the NameForm functional component
function NameForm() {
  // --- State Declaration ---
  // State for the input field's current value
  const [name, setName] = useState("");
  // State for the last submitted name (to display a message)
  const [submittedName, setSubmittedName] = useState("");

  // --- Event Handlers ---
  // Update 'name' state as user types in the input
  function handleChange(event) {
    setName(event.target.value); // Get value from event and update state
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default page reload on form submit
    setSubmittedName(name); // Update the submitted name state with the current name
    // In a real app, you might send 'name' to an API here
    console.log("Form submitted with name:", name);
    // Maybe clear the input after submit?
    // setName('');
  }

  // --- Render JSX ---
  return (
    <div style={{ border: "1px solid lightgreen", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Simple Form Example</h2>
      {/* Attach handleSubmit to the form's onSubmit event */}
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: "5px" }}>
          Name:
          {/* Controlled input: value tied to state, onChange updates state */}
          <input
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          style={{ marginLeft: "5px" }}
        >
          Submit
        </button>
      </form>
      {/* Conditionally display a message if a name has been submitted */}
      {submittedName && <p style={{ marginTop: "10px" }}>Hello, {submittedName}!</p>}
    </div>
  );
}

// Export the component
export default NameForm;
