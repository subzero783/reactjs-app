import React from "react";

// Define the UserProfile functional component
// We use object destructuring directly in the function parameters
// to extract the specific props we expect ({ name, email, age }).
function UserProfile({ name, email, age }) {
  // Now we can use name, email, and age directly as variables
  // instead of props.name, props.email, etc.

  // Basic inline styles for the card
  const cardStyle = {
    border: "1px solid #ccc",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div
      className="user-card"
      style={cardStyle}
    >
      {/* Use the destructured variables directly in JSX */}
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      {/* Conditionally render Age only if it's provided and not null/0 */}
      {age ? <p>Age: {age}</p> : <p>Age: Not specified</p>}
    </div>
  );
}

// Export the component
export default UserProfile;
