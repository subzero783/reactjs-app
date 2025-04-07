import { useState } from "react";
// Import the components
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import ChatRoom from "./ChatRoom";
// import './App.css'; // Optional CSS

function App() {
  // State to control the postId passed to PostDetails
  const [currentPostId, setCurrentPostId] = useState(1);
  // State to control the roomId passed to ChatRoom
  const [currentRoomId, setCurrentRoomId] = useState("general");
  // State to control mounting/unmounting of ChatRoom
  const [showChat, setShowChat] = useState(true);

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 10: useEffect Hook Examples</h1>
      </header>

      <main>
        {/* --- Example 1: Post List (Fetch on Mount) --- */}
        <PostList />
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 2: Post Details (Effect on Prop Change) --- */}
        <div style={{ border: "1px dashed blue", padding: "10px", margin: "10px 0" }}>
          <h2>Post Details Control</h2>
          <p>Current Post ID Prop: {currentPostId}</p>
          <button
            onClick={() => setCurrentPostId((id) => id + 1)}
            style={{ marginRight: "5px" }}
          >
            Fetch Next Post (ID: {currentPostId + 1})
          </button>
          <button onClick={() => setCurrentPostId(1)}>Fetch Post 1</button>
          {/* Pass the currentPostId state as a prop */}
          <PostDetails postId={currentPostId} />
        </div>
        <hr style={{ margin: "30px 0" }} />

        {/* --- Example 3: Chat Room with Cleanup --- */}
        <div style={{ border: "1px dashed red", padding: "10px", margin: "10px 0" }}>
          <h2>Chat Room Control (Mount/Unmount & Prop Change)</h2>
          <button
            onClick={() => setShowChat((s) => !s)}
            style={{ marginRight: "10px" }}
          >
            {showChat ? "Unmount Chat Room" : "Mount Chat Room"}
          </button>
          Current Room ID: {currentRoomId}
          <button
            onClick={() => setCurrentRoomId("general")}
            style={{ margin: "0 5px" }}
          >
            Join General
          </button>
          <button onClick={() => setCurrentRoomId("react-help")}>Join React Help</button>
          {/* Conditionally render ChatRoom to test mount/unmount cleanup */}
          {/* Pass currentRoomId to test dependency change cleanup/re-subscribe */}
          {showChat && <ChatRoom roomId={currentRoomId} />}
        </div>
      </main>
    </div>
  );
}

export default App;
