import { useState, useEffect } from "react";

// Demonstrates useEffect running after every render by default
function EffectLogger() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(10); // Another state to trigger updates

  // --- Effect without Dependency Array ---
  // This effect function runs after the initial render AND
  // after EVERY subsequent re-render (caused by setCount or setOtherCount).
  useEffect(() => {
    console.log("[EffectLogger] Component rendered or updated! Count is:", count);
    // Example side effect: updating document title
    document.title = `Logger Count: ${count}`;
  }); // <-- No dependency array passed

  console.log("[EffectLogger] Rendering component..."); // Log during render phase

  return (
    <div style={{ border: "1px solid orange", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Effect Logger (Runs on Every Render)</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ marginRight: "5px" }}
      >
        Increment Count
      </button>
      <p>Other Count: {otherCount}</p>
      <button onClick={() => setOtherCount((o) => o + 10)}>Increment Other Count</button>
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Check the console and document title after clicking either button)</p>
    </div>
  );
}

export default EffectLogger;
