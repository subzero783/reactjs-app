import { useState } from "react";
// Import the components
import EffectLogger from "./EffectLogger";
import UserData from "./UserData";
import TimerComponent from "./TimerComponent";
// import './App.css'; // Optional CSS

function App() {
  // State to control the userId passed to UserData
  const [currentUserId, setCurrentUserId] = useState(1);
  // State to control whether the TimerComponent is mounted
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 8: useEffect Examples</h1>
      </header>

      <main>
        {/* --- Example 1: Effect Logger --- */}
        <EffectLogger />
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 2: User Data based on Prop --- */}
        <div style={{ border: "1px dashed blue", padding: "10px", margin: "10px 0" }}>
          <h2>User Data Control</h2>
          <p>Current User ID Prop: {currentUserId}</p>
          <button
            onClick={() => setCurrentUserId((id) => id + 1)}
            style={{ marginRight: "5px" }}
          >
            Fetch Next User (ID: {currentUserId + 1})
          </button>
          <button onClick={() => setCurrentUserId(1)}>Fetch User 1</button>
          {/* Pass the currentUserId state as a prop */}
          <UserData userId={currentUserId} />
        </div>
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 3: Timer with Cleanup --- */}
        <div style={{ border: "1px dashed red", padding: "10px", margin: "10px 0" }}>
          <h2>Timer Control (Mount/Unmount)</h2>
          <button onClick={() => setShowTimer((s) => !s)}>{showTimer ? "Unmount Timer Component" : "Mount Timer Component"}</button>
          {/* Conditionally render TimerComponent to test mount/unmount cleanup */}
          {showTimer && <TimerComponent />}
        </div>
      </main>
    </div>
  );
}

export default App;
