// Import the components we defined in other files
import WelcomeBanner from "./WelcomeBanner";
import Greeting from "./Greeting";
import GreetingClass from "./GreetingClass";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  // Data to pass as props
  const userName1 = "Alice";
  const userName2 = "Bob";

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {/* Render the simple functional component */}
      <WelcomeBanner />

      <hr style={{ margin: "20px 0" }} />

      <h2>Functional Component Example:</h2>
      {/* Render the functional component, passing the 'name' prop */}
      <Greeting name={userName1} />

      <hr style={{ margin: "20px 0" }} />

      <h2>Class Component Example:</h2>
      {/* Render the class component, passing the 'name' prop */}
      <GreetingClass name={userName2} />
    </div>
  );
}

// Export the App component
export default App;
