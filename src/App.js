// Import the components
import Counter from "./Counter";
import ToggleVisibility from "./ToggleVisibility";
import SimpleInput from "./SimpleInput";
import UserSettings from "./UserSettings";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 9: useState Hook Examples</h1>
      </header>

      <main>
        {/* Render the Counter component */}
        <Counter />
        <hr style={{ margin: "20px 0" }} />

        {/* Render the ToggleVisibility component */}
        <ToggleVisibility />
        <hr style={{ margin: "20px 0" }} />

        {/* Render the SimpleInput component */}
        <SimpleInput />
        <hr style={{ margin: "20px 0" }} />

        {/* Render the UserSettings component */}
        <UserSettings />
      </main>
    </div>
  );
}

// Export the App component
export default App;
