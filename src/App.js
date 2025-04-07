import { useState } from "react";
// Import the components
import MyComponent from "./MyComponent"; // Uses MyComponent.css implicitly via its own import
import InlineStyledComponent from "./InlineStyledComponent";
import ModularButton from "./ModularButton"; // Uses Button.module.css implicitly
import ConditionalStyle from "./ConditionalStyle"; // Uses ConditionalStyle.css implicitly

// Import global App styles if needed
// import './App.css';

// Define the main App component
function App() {
  // State for the ConditionalStyle component example
  const [isConditionalActive, setIsConditionalActive] = useState(false);

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 15: Styling Examples</h1>
      </header>

      <main>
        {/* --- Example 1: Plain CSS --- */}
        <MyComponent />
        <hr style={{ margin: "20px 0" }} />

        {/* --- Example 2: Inline Styles --- */}
        <InlineStyledComponent />
        <hr style={{ margin: "20px 0" }} />

        {/* --- Example 3: CSS Modules --- */}
        <ModularButton />
        <hr style={{ margin: "20px 0" }} />

        {/* --- Example 4: Conditional Styling --- */}
        <div>
          <button
            onClick={() => setIsConditionalActive((a) => !a)}
            style={{ marginBottom: "10px" }}
          >
            Toggle 'isActive' Prop for ConditionalStyle Component
          </button>
          {/* Pass the state down as a prop */}
          <ConditionalStyle initialActive={isConditionalActive} />
        </div>
      </main>
    </div>
  );
}

// Export the App component
export default App;
