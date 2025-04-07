// Import the components
import ClickButton from "./ClickButton";
import InputLogger from "./InputLogger";
import ItemButton from "./ItemButton";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  const items = [
    { id: 101, label: "Product A" },
    { id: 205, label: "Service B" },
    { id: 317, label: "Gadget C" },
  ];

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 11: Event Handling Examples</h1>
      </header>

      <main>
        {/* --- Example 1: Simple Click --- */}
        <ClickButton />
        <hr style={{ margin: "20px 0" }} />

        {/* --- Example 2: Input Change --- */}
        <InputLogger />
        <hr style={{ margin: "20px 0" }} />

        {/* --- Example 3: Passing Arguments --- */}
        <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "5px" }}>
          <h2>Passing Arguments to Handlers</h2>
          <p>Click buttons to see item ID logged:</p>
          {items.map((item) => (
            // Render an ItemButton for each item in the array
            // Pass the item's id and label as props
            <ItemButton
              key={item.id}
              id={item.id}
              label={item.label}
            />
          ))}
          <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Check console after clicking buttons)</p>
        </div>
      </main>
    </div>
  );
}

// Export the App component
export default App;
