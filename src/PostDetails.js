import React, { useState, useEffect } from "react";

// Fetches details for a specific post based on the postId prop
function PostDetails({ postId }) {
  // Component receives postId prop
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Effect with Dependency Array ---
  // This effect runs after mount AND only when 'postId' changes value.
  useEffect(() => {
    // Don't fetch if postId is not valid (e.g., 0 or null or undefined)
    if (!postId || postId <= 0) {
      setPost(null); // Clear post data if no valid ID
      setError(null);
      setIsLoading(false);
      console.log("[PostDetails Effect] Invalid postId, skipping fetch.");
      return; // Exit the effect
    }

    console.log(`[PostDetails Effect] Fetching details for post ${postId}...`);
    setIsLoading(true);
    setError(null);
    setPost(null); // Clear previous post while fetching new one

    let isMounted = true; // Flag to prevent state update if component unmounts during fetch

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // Use postId prop in URL
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch post ${postId} (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          // Only update state if component is still mounted
          setPost(data); // Update state with the single post data
          // setIsLoading(false); // Moved to finally
        }
      })
      .catch((error) => {
        console.error("[PostDetails] Fetch error:", error);
        if (isMounted) {
          setError(error.message);
          // setIsLoading(false); // Moved to finally
        }
      })
      .finally(() => {
        // Ensure loading is set to false only if the component is still mounted
        if (isMounted) {
          setIsLoading(false);
        }
      });

    // Cleanup function: Set isMounted to false when component unmounts
    // or before the effect runs again (if postId changes)
    return () => {
      isMounted = false;
      console.log(`[PostDetails Cleanup] Cleanup for postId: ${postId}`);
    };
  }, [postId]); // <-- Dependency: Effect re-runs if postId CHANGES

  console.log(`[PostDetails] Rendering for postId: ${postId}`);

  // --- Render Logic ---
  // Handle cases where no valid ID was ever passed or currently selected
  if (!postId || postId <= 0) {
    return <p style={{ fontStyle: "italic", color: "grey", padding: "15px", margin: "10px", border: "1px solid green", borderRadius: "5px" }}>Please select a valid Post ID above.</p>;
  }

  // Handle loading state
  if (isLoading) {
    return <p style={{ padding: "15px", margin: "10px", border: "1px solid green", borderRadius: "5px" }}>Loading post data for ID: {postId}...</p>;
  }

  // Handle error state
  if (error) {
    return (
      <p style={{ color: "red", padding: "15px", margin: "10px", border: "1px solid green", borderRadius: "5px" }}>
        Error fetching post {postId}: {error}
      </p>
    );
  }

  // Handle case where fetch finished but no post was found (or cleared)
  // Could happen if the ID doesn't exist on the server
  if (!post) {
    return <p style={{ padding: "15px", margin: "10px", border: "1px solid green", borderRadius: "5px" }}>No post data found for ID: {postId}.</p>;
  }

  // Display fetched data
  return (
    <div style={{ border: "1px solid green", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Post Details (Effect runs when ID changes)</h2>
      <h3>
        ID: {post.id} - {post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
