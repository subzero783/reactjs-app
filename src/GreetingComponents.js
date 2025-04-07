// Simple component for the logged-in greeting
export function UserGreeting() {
  return <h2>Welcome back!</h2>;
}

// Simple component for the logged-out greeting
export function GuestGreeting() {
  return <h2>Please sign in.</h2>;
}

// Note: Exporting multiple components from one file using named exports.
// Alternatively, each could be in its own file with a default export.
