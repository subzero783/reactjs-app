import { useState } from "react";
// Import the components
import LoginControl from "./ButtonComponents/LoginControl";
import Mailbox from "./Mailbox";
import WarningBanner from "./WarningBanner";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  // State to control the Mailbox messages
  const [messages, setMessages] = useState(["React update", "Meeting reminder"]);
  // State to control the WarningBanner visibility
  const [showWarning, setShowWarning] = useState(true);

  // Handler to simulate adding a message
  const addMessage = () => {
    setMessages((prev) => [...prev, `New message #${prev.length + 1}`]);
  };

  // Handler to simulate clearing messages
  const clearMessages = () => {
    setMessages([]);
  };

  // Handler to toggle the warning banner
  const toggleWarning = () => {
    setShowWarning((prev) => !prev);
  };

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 13: Conditional Rendering Examples</h1>
      </header>

      <main>
        {/* --- Example 1: Login Control (Ternary) --- */}
        {/* LoginControl manages its own state internally */}
        <LoginControl />
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 2: Mailbox (&&) --- */}
        <div>
          <button
            onClick={addMessage}
            style={{ marginRight: "5px" }}
          >
            Add Message
          </button>
          <button onClick={clearMessages}>Clear Messages</button>
          {/* Pass the messages array state as a prop */}
          <Mailbox unreadMessages={messages} />
        </div>
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 3: Warning Banner (null) --- */}
        <div>
          <button onClick={toggleWarning}>{showWarning ? "Hide Warning" : "Show Warning"}</button>
          {/* Pass the showWarning state as a prop */}
          <WarningBanner showWarning={showWarning} />
        </div>
      </main>
    </div>
  );
}

// Export the App component
export default App;
