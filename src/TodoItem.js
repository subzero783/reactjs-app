// Component to display a single todo item
// Receives the 'todo' object, and handler functions 'onToggleComplete' & 'onDelete' via props
function TodoItem({ todo, onToggleComplete, onDelete }) {
  // --- Inline Style for Completed Todos ---
  // Apply line-through style if the todo item is marked as completed
  const itemStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "#888" : "#000", // Dim completed items slightly
    cursor: "pointer", // Indicate the text is clickable for toggling
    flexGrow: 1, // Allow text to take available space
    margin: "0 10px", // Space around text
    wordBreak: "break-word", // Prevent long words from overflowing
  };

  // Log when this specific item renders (useful for debugging keys/updates)
  console.log(`Rendering TodoItem: ${todo.text} (ID: ${todo.id}, Completed: ${todo.completed})`);

  return (
    // Use a class for potential CSS targeting (defined in App.css)
    <li className="todo-item">
      {/* Checkbox to visually represent and trigger completion toggle */}
      <input
        type="checkbox"
        checked={todo.completed} // Bind checked status to todo's completed state
        // When checkbox changes, call the onToggleComplete function passed from App, providing this item's ID
        onChange={() => onToggleComplete(todo.id)}
        aria-label={`Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`}
        style={{ marginRight: "10px", cursor: "pointer" }} // Add cursor pointer to checkbox too
      />

      {/* The todo text itself - also clickable to toggle */}
      {/* Apply conditional styling based on completion status */}
      {/* When clicked, call the onToggleComplete function passed from App, providing this item's ID */}
      <span
        style={itemStyle}
        onClick={() => onToggleComplete(todo.id)}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      {/* Use inline arrow function to ensure onDelete is called with the correct ID only when clicked */}
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        aria-label={`Delete ${todo.text}`}
      >
        &times; {/* Simple 'X' character for delete symbol */}
      </button>
    </li>
  );
}

// Memoize TodoItem if performance becomes an issue with long lists,
// but usually not needed for simple cases. Wrapping with React.memo can prevent
// re-rendering of this component if its props (todo, onToggleComplete, onDelete) haven't changed.
// Requires importing React: import React from 'react';
// export default React.memo(TodoItem);

// Standard export without memoization:
export default TodoItem;
