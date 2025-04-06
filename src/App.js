// Import the components we defined
import Counter from "./Counter";
import NameForm from "./NameForm";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 7: State & useState Examples</h1>
      </header>

      <main>
        {/* Render the Counter component */}
        <Counter />

        <hr style={{ margin: "30px 0" }} />

        {/* Render the NameForm component */}
        <NameForm />
      </main>
    </div>
  );
}

// Export the App component
export default App;
