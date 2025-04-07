import { useState, useEffect } from "react";

// Fetches and displays a list of posts on initial mount
function PostList() {
  const [posts, setPosts] = useState([]); // State for posts array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // State for potential errors

  // Effect to fetch data ONCE on mount
  useEffect(() => {
    console.log("[PostList] Fetching posts...");
    setIsLoading(true); // Set loading true before fetch
    setError(null); // Clear previous errors

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") // Use JSONPlaceholder URL (limit to 10 posts)
      .then((res) => {
        if (!res.ok) {
          // Throw an error if the network response is bad
          throw new Error(`Network response was not ok (${res.status})`);
        }
        return res.json(); // Parse JSON data
      })
      .then((data) => {
        setPosts(data); // Update state with fetched posts
        // setIsLoading(false); // Set loading false after fetch - moved to finally
      })
      .catch((error) => {
        console.error("[PostList] Fetch error:", error);
        setError(error.message); // Store error message in state
        // setIsLoading(false); // Also set loading false on error - moved to finally
      })
      .finally(() => {
        // This block runs whether the fetch succeeded or failed
        console.log("[PostList] Fetch attempt finished.");
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- Empty array means run only once after initial mount

  // --- Render Logic ---
  if (isLoading) {
    return <p>Loading posts...</p>; // Show loading state
  }

  if (error) {
    return <p style={{ color: "red" }}>Error fetching posts: {error}</p>; // Show error state
  }

  return (
    // Render post list
    <div style={{ border: "1px solid teal", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Posts (Fetched on Mount)</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{ marginBottom: "10px" }}
            >
              {" "}
              {/* Use unique key */}
              <h4 style={{ margin: "0 0 5px 0" }}>{post.title}</h4>
              <p style={{ margin: "0" }}>{post.body.substring(0, 100)}...</p> {/* Show snippet */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
