import { useState, useEffect } from "react";

// Demonstrates useEffect running when a specific dependency (prop) changes
function UserData({ userId }) {
  // Component receives userId prop
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- Effect with Dependency Array ---
  // This effect runs after mount AND only when 'userId' changes value.
  useEffect(() => {
    // Prevent fetching if userId is invalid or null
    if (!userId || userId <= 0) {
      setUserData(null); // Clear data if ID is invalid
      console.log("[UserData Effect] Invalid userId, skipping fetch.");
      return; // Stop the effect here
    }

    console.log(`[UserData Effect] Fetching data for user ID: ${userId}`);
    setIsLoading(true);
    setUserData(null); // Clear previous data while fetching

    // Simulate API call with a timeout
    const timerId = setTimeout(() => {
      console.log(`[UserData Effect] Data fetched for user ID: ${userId}`);
      // In a real app, replace this with:
      // fetch(`/api/users/${userId}`).then(res => res.json()).then(data => { ... })
      // For demonstration, we create mock data
      setUserData({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
      setIsLoading(false);
    }, 1000); // Simulate 1 second network delay

    // Optional: Cleanup for the timeout if userId changes *before* fetch completes
    // Although less critical for fetch, good practice if the async op could be long
    return () => {
      clearTimeout(timerId);
      console.log(`[UserData Cleanup] Cleanup effect for userId: ${userId} (or unmount)`);
    };
  }, [userId]); // <-- Dependency array: effect depends ONLY on userId

  console.log(`[UserData] Rendering component for userId: ${userId}`);

  // --- Render Logic ---
  if (isLoading) {
    return <p>Loading user data for ID: {userId}...</p>;
  }

  if (!userData) {
    // Handles initial state or invalid userId case after effect runs
    // Check if userId was valid in the first place before saying "No data"
    if (!userId || userId <= 0) {
      return <p>Please provide a valid User ID.</p>;
    }
    return <p>No user data available for ID: {userId}.</p>;
  }

  // Display fetched data
  return (
    <div style={{ border: "1px solid green", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>User Data (Effect runs when ID changes)</h2>
      <p>Displaying data for User ID: {userId}</p>
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserData;
