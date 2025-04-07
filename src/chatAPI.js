// Simple Mock Chat API for demonstration purposes
// In a real application, this would interact with a backend server (e.g., via WebSockets)

// Store intervals globally (or within a class/closure) to simulate persistent subscriptions
// and allow cleanup across different component instances potentially subscribing to the same room.
// NOTE: A simple global object like this is okay for a demo, but not robust for a real app.
const intervals = {};

export const chatAPI = {
  /**
   * Simulates subscribing to messages for a specific room.
   * @param {string} roomId - The ID of the room to subscribe to.
   * @param {function} handleMessageCallback - The function to call when a new message 'arrives'.
   * @returns {function} - An unsubscribe function to stop the simulated message flow.
   */
  subscribeToMessages: (roomId, handleMessageCallback) => {
    console.log(`[Mock API] Simulating subscription to room: ${roomId}`);

    // Clear any existing interval for this room ID just in case
    // (though the component's useEffect cleanup should handle this ideally)
    if (intervals[roomId]) {
      clearInterval(intervals[roomId]);
    }

    // Simulate receiving messages every 2.5 seconds
    const intervalId = setInterval(() => {
      // Create a mock message
      const newMessage = {
        id: Date.now(), // Simple unique ID
        roomId: roomId,
        sender: "System",
        text: `Message for room ${roomId} at ${new Date().toLocaleTimeString()}`,
      };
      // Call the callback function provided by the component
      handleMessageCallback(newMessage);
    }, 2500); // Send a message every 2.5 seconds

    // Store the interval ID associated with the room ID
    intervals[roomId] = intervalId;

    // Return the unsubscribe function specific to this subscription
    // This is what the component's useEffect cleanup function will call.
    return () => {
      console.log(`[Mock API] Simulating unsubscription from room: ${roomId}`);
      // Clear the interval associated with this specific subscription
      clearInterval(intervalId); // Use the ID captured in this closure
      // Optionally remove the entry from the global store if needed
      delete intervals[roomId];
    };
  },

  // Note: The actual 'unsubscribe' logic is encapsulated within the function
  // returned by subscribeToMessages. There isn't a separate top-level unsubscribe method here.
};
