import React, { useState, useEffect } from "react";

// Demonstrates useEffect cleanup function
function TimerComponent() {
  const [tick, setTick] = useState(0);

  // --- Effect with Cleanup ---
  useEffect(() => {
    // This effect runs only once after initial mount because of []
    console.log("[TimerComponent Effect] Setting up interval timer...");

    // Setup the side effect: Start an interval timer
    const timerId = setInterval(() => {
      console.log("[TimerComponent] Timer Tick!");
      // Use functional update for state based on previous state in intervals/timeouts
      setTick((t) => t + 1);
    }, 1000); // Tick every second

    // Return the cleanup function
    // This function runs when the component unmounts
    return () => {
      console.log("[TimerComponent Cleanup] Cleaning up interval timer!");
      clearInterval(timerId); // Clear the interval to prevent memory leaks
    };
  }, []); // <-- Empty dependency array: Run effect once on mount, cleanup on unmount

  console.log("[TimerComponent] Rendering component...");

  return (
    <div style={{ border: "1px solid purple", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Timer (Effect with Cleanup)</h2>
      <p>Timer Tick: {tick}</p>
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Check console for setup and cleanup logs when this component is mounted/unmounted)</p>
    </div>
  );
}

export default TimerComponent;
