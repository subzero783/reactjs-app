import React from "react";

// Define the Card functional component
// This component acts as a generic container
function Card(props) {
  // It receives props, including the special 'children' prop

  // Basic inline styles for the card
  const cardStyle = {
    border: "2px solid blue",
    margin: "15px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#e7f3ff",
  };

  const contentStyle = {
    marginTop: "10px",
  };

  return (
    <div
      className="card"
      style={cardStyle}
    >
      {/* Render the title passed as a prop */}
      <h1>{props.title}</h1>
      <hr />
      {/* Render whatever elements were nested inside <Card> in the parent */}
      {/* React automatically puts nested elements into props.children */}
      <div
        className="card-content"
        style={contentStyle}
      >
        {props.children}
      </div>
    </div>
  );
}

// Export the component
export default Card;
