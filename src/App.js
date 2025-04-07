import { useState, useEffect } from "react";
import TodoItem from "./TodoItem"; // Import the child component
import "./App.css"; // Import styles

function App() {
  // --- State ---
  // Initialize state from localStorage if available, otherwise use default todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("reactTodos"); // Key for localStorage
    try {
      // Parse saved JSON or return default array if nothing saved or parsing fails
      return savedTodos
        ? JSON.parse(savedTodos)
        : [
            { id: 1, text: "Learn React Basics", completed: true },
            { id: 2, text: "Build To-do App", completed: false },
            { id: 3, text: "Add Styling", completed: false },
          ];
    } catch (e) {
      // Handle potential errors during JSON parsing
      console.error("Failed to parse saved todos from localStorage", e);
      // Fallback to default todos if parsing fails
      return [
        { id: 1, text: "Learn React Basics", completed: true },
        { id: 2, text: "Build To-do App", completed: false },
        { id: 3, text: "Add Styling", completed: false },
      ];
    }
  });

  // State for the new todo input field
  const [newTodoText, setNewTodoText] = useState("");

  // --- Side Effect ---
  // Save todos to localStorage whenever the 'todos' state array changes
  useEffect(() => {
    console.log("Saving todos to localStorage");
    // Convert the todos array to a JSON string and save it
    localStorage.setItem("reactTodos", JSON.stringify(todos));
    // Dependency array: this effect runs only when the 'todos' state changes
  }, [todos]);

  // --- Event Handlers ---

  // Update input field state as user types
  function handleInputChange(event) {
    setNewTodoText(event.target.value);
  }

  // Add a new todo item to the list
  function handleAddTodo(event) {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    const trimmedText = newTodoText.trim(); // Remove leading/trailing whitespace

    // Don't add empty todos
    if (trimmedText === "") {
      alert("Please enter a task description.");
      return;
    }

    // Create the new todo object
    const newTodo = {
      id: Date.now(), // Use timestamp for a simple unique ID in this demo
      text: trimmedText,
      completed: false, // New todos start as not completed
    };

    // Update the todos state IMMUTABLY
    // Create a new array with all previous todos spread (...) plus the new one
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear the input field after adding
    setNewTodoText("");
    console.log("Added new todo:", newTodo);
  }

  // Delete a todo item by its ID
  function handleDeleteTodo(idToDelete) {
    console.log("Deleting todo with ID:", idToDelete);
    // Update state IMMUTABLY by filtering out the deleted item
    // Create a new array containing only todos whose ID does NOT match idToDelete
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  }

  // Toggle the completed status of a todo item by its ID
  function handleToggleComplete(idToToggle) {
    console.log("Toggling complete for ID:", idToToggle);
    // Update state IMMUTABLY using map
    setTodos((prevTodos) =>
      // Create a new array by mapping over the previous todos
      prevTodos.map((todo) => {
        // If this is the todo we want to toggle...
        if (todo.id === idToToggle) {
          // ...return a NEW object spreading the old todo's properties (...)
          // but with the 'completed' status flipped (!todo.completed)
          return { ...todo, completed: !todo.completed };
        } else {
          // ...otherwise, return the original todo object unchanged
          return todo;
        }
      })
    );
  }

  // --- Render Logic ---
  console.log("Rendering App. Number of todos:", todos.length);
  return (
    <div className="App">
      <h1>React To-do List</h1>

      {/* Form for adding new todos */}
      <form
        onSubmit={handleAddTodo}
        className="add-todo-form"
      >
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodoText} // Controlled input: value linked to state
          onChange={handleInputChange} // Update state on change
          aria-label="New todo text"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* List of todo items */}
      <ul className="todo-list">
        {/* Conditional rendering: Show message if list is empty */}
        {todos.length === 0 ? (
          <p className="empty-message">Your to-do list is empty!</p>
        ) : (
          // Map over the todos array to render each item using TodoItem component
          todos.map((todo) => (
            <TodoItem
              key={todo.id} // Essential unique key prop for list items
              todo={todo} // Pass the entire todo data object as a prop
              onToggleComplete={handleToggleComplete} // Pass the toggle handler function as a prop
              onDelete={handleDeleteTodo} // Pass the delete handler function as a prop
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
