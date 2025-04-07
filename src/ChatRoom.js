import { useState, useEffect } from "react";
import { chatAPI } from "./chatAPI"; // Import the mock API

// Demonstrates useEffect cleanup with a mock subscription
function ChatRoom({ roomId }) {
  // Receives roomId prop
  const [messages, setMessages] = useState([]);

  // --- Effect with Cleanup ---
  // Runs on mount and whenever roomId changes
  useEffect(() => {
    // Don't subscribe if roomId is invalid or empty
    if (!roomId) {
      console.log("[ChatRoom Effect] No room ID provided, skipping subscription.");
      setMessages([]); // Clear messages if no room is selected
      return; // Exit the effect
    }

    console.log(`[ChatRoom Effect] Subscribing to room ${roomId}...`);
    setMessages([]); // Clear messages when changing rooms

    // Call hypothetical API to subscribe, assume it returns an unsubscribe function
    const unsubscribe = chatAPI.subscribeToMessages(roomId, (newMessage) => {
      console.log(`[ChatRoom] Received message for room ${roomId}:`, newMessage);
      // Use functional update to safely add to the messages array
      // This ensures we're always working with the latest messages state
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Return the cleanup function
    // This runs before the component unmounts OR before the effect runs again
    // (because roomId changed)
    return () => {
      console.log(`[ChatRoom Cleanup] Unsubscribing from room ${roomId}...`);
      unsubscribe(); // Call the unsubscribe function provided by the API
    };
  }, [roomId]); // <-- Dependency: Re-subscribe/cleanup if roomId changes

  console.log(`[ChatRoom] Rendering for room: ${roomId}`);

  return (
    <div style={{ border: "1px solid purple", padding: "15px", margin: "10px", borderRadius: "5px", minHeight: "150px" }}>
      <h2>Chat Room: {roomId || "None Selected"} (Effect with Cleanup)</h2>
      {roomId ? (
        <ul>
          {messages.length === 0 && <li style={{ fontStyle: "italic", color: "grey" }}>No messages yet... (Mock API sends one every ~2.5s)</li>}
          {/* Using index as key here for simplicity as messages might not have unique IDs in this mock */}
          {messages.map((msg, index) => (
            <li key={index}>{msg.text}</li>
          ))}
        </ul>
      ) : (
        <p>Select a room ID above to connect.</p>
      )}
    </div>
  );
}

export default ChatRoom;
