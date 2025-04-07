// Import the form components
import NameInput from "./NameInput";
import SignUpForm from "./SignUpForm";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 12: Forms & Controlled Components</h1>
      </header>

      <main>
        {/* Render the simple input example */}
        <NameInput />

        <hr style={{ margin: "30px 0" }} />

        {/* Render the more complete sign-up form */}
        <SignUpForm />
      </main>
    </div>
  );
}

// Export the App component
export default App;
