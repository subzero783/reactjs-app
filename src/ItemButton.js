// Demonstrates passing custom arguments to an event handler
// Assume this component receives an id and label for an item
function ItemButton({ id, label }) {
  // Handler now accepts the specific item ID (and optionally the event)
  // This function contains the actual logic to run on click
  function handleItemClick(itemId, event) {
    // Stop propagation if needed, etc.
    // event.stopPropagation();
    console.log(`Button for item ID: ${itemId} was clicked.`);
    alert(`You clicked item ${itemId} (${label})`);
    // console.log('Original event object:', event); // Can still access event
  }

  console.log(`Rendering ItemButton for ID: ${id}`);

  return (
    <button
      // Use an inline arrow function for onClick to pass arguments
      // When clicked, React calls: (event) => handleItemClick(id, event)
      // This arrow function then calls *our* handler with the specific 'id'
      onClick={(event) => handleItemClick(id, event)}
      style={{ margin: "5px", padding: "8px" }}
    >
      {label} (ID: {id})
    </button>
  );
}

export default ItemButton;
