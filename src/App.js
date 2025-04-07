import { useState, useEffect } from "react";
import "./App.css"; // Import basic styles

function App() {
  // State for the original list of posts fetched from API
  const [posts, setPosts] = useState([]);
  // State for loading status
  const [isLoading, setIsLoading] = useState(true);
  // State for any fetching errors
  const [error, setError] = useState(null);
  // State for the user's filter input
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    console.log("Attempting to fetch posts...");
    setIsLoading(true); // Indicate loading started
    setError(null); // Clear any previous errors

    // Fetching posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Check if the HTTP response status is OK (e.g., 200)
        if (!response.ok) {
          // If not okay, construct an error message and throw it
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If okay, parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        // On successful data retrieval, update the posts state
        setPosts(data);
        console.log("Posts fetched successfully:", data.length);
      })
      .catch((error) => {
        // If any error occurred during fetch or parsing
        console.error("Error fetching posts:", error);
        setError(error.message); // Store the error message in state
      })
      .finally(() => {
        // This block executes regardless of success or failure
        setIsLoading(false); // Indicate loading has finished
        console.log("Fetch attempt complete.");
      });

    // The empty dependency array ensures this effect runs only once on mount
  }, []);

  // Handler function to update the search term state as the user types
  function handleFilterChange(event) {
    setSearchTerm(event.target.value);
  }

  // Filter the posts based on the current search term BEFORE rendering the list
  // This filtering happens on every render where searchTerm might have changed
  const filteredPosts = posts.filter((post) =>
    // Check if the post title (lowercase) includes the search term (lowercase)
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Determine Content Based on State ---
  let content;
  if (isLoading) {
    // Display loading message
    content = <p className="loading">Loading posts, please wait...</p>;
  } else if (error) {
    // Display error message
    content = <p className="error">Error loading posts: {error}</p>;
  } else {
    // Display the filtered list or a message if the list/filter is empty
    content = (
      <ul className="post-list">
        {/* Check if the filtered list has items */}
        {filteredPosts.length > 0 ? (
          // If yes, map over filtered posts
          filteredPosts.map((post) => (
            // Render each post item with a unique key
            <li
              key={post.id}
              className="post-item"
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          // If no posts match the filter (or if initial list was empty)
          <p>No posts found{searchTerm ? " matching your filter" : ""}.</p>
        )}
      </ul>
    );
  }

  // --- Render the Main App Structure ---
  return (
    <div className="App">
      <h1>Blog Posts</h1>

      {/* Filter Input Section */}
      <div className="filter-container">
        <label htmlFor="filterInput">Filter by title: </label>
        <input
          id="filterInput"
          type="text"
          placeholder="Enter search term..."
          value={searchTerm} // Controlled input value
          onChange={handleFilterChange} // Update state on change
        />
      </div>

      {/* Content Area (displays loading, error, or list) */}
      <div className="content-area">{content}</div>
    </div>
  );
}

export default App;
