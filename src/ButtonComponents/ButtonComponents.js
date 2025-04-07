// Simple Login button component
// Accepts an onClick handler function via props
export function LoginButton({ onClick }) {
  // Attaches the received onClick function to the button's onClick event
  return <button onClick={onClick}>Login</button>;
}

// Simple Logout button component
// Accepts an onClick handler function via props
export function LogoutButton({ onClick }) {
  // Attaches the received onClick function to the button's onClick event
  return <button onClick={onClick}>Logout</button>;
}

// Note: Exporting multiple components from one file using named exports.
// Alternatively, each could be in its own file with a default export.
