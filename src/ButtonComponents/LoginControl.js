import { useState } from "react";
// Import the helper components using named imports
// Assumes ButtonComponents.jsx and GreetingComponents.jsx are in the same folder
import { LoginButton, LogoutButton } from "./ButtonComponents";
import { UserGreeting, GuestGreeting } from "../GreetingComponents";

// Demonstrates conditional rendering using the ternary operator
function LoginControl() {
  // State to track login status, initially false (logged out)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handlers to toggle state
  const handleLoginClick = () => {
    console.log("Login button clicked");
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    console.log("Logout button clicked");
    setIsLoggedIn(false);
  };

  console.log("Rendering LoginControl. isLoggedIn:", isLoggedIn);

  return (
    <div style={{ border: "1px solid blue", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Login Control (Ternary)</h2>

      {/* Use ternary operator directly inside JSX for the greeting */}
      {/* If isLoggedIn is true, render UserGreeting, else render GuestGreeting */}
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

      {/* Use ternary operator directly inside JSX for the button */}
      {/* If isLoggedIn is true, render LogoutButton, else render LoginButton */}
      {/* Pass the appropriate click handler to the rendered button */}
      {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
    </div>
  );
}

export default LoginControl;
