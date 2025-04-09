// Define the UserProfile functional component
// It accepts 'props' as an argument (an object containing passed data)
function UserProfile(props) {
  // --- JavaScript Logic ---
  // We can write regular JavaScript here before the return statement.
  // Example: Combine first and last name from props
  const fullName = props.firstName + " " + props.lastName;

  // --- JSX Return ---
  // The component returns a description of the UI using JSX.
  // It must return a single root element (here, it's the div).
  return (
    // Use className for CSS classes (maps to HTML 'class')
    <div
      className="profile-card"
      style={{ border: "1px solid #eee", padding: "15px", margin: "10px", borderRadius: "8px", textAlign: "center" }}
    >
      {/* This is a JSX comment */}
      {/* User Avatar Image */}
      <img
        // Use curly braces {} to embed JavaScript expressions (like variables) as prop values
        src={props.avatarUrl}
        // String literals can be passed in quotes
        alt={"Avatar for " + fullName} // Can also use expressions in strings within {}
        className="profile-avatar" // Use className, not class
        style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }}
      />{" "}
      {/* Self-closing tag for elements with no children */}
      {/* Embed the fullName variable */}
      <h2>{fullName}</h2>
      {/* Embed the email prop */}
      <p>Email: {props.email}</p>
    </div> // End of the single root element
  );
}

// Export the component to make it available for import in other files
export default UserProfile;
