// Define the WelcomeBanner functional component
// This is a simple component that doesn't accept any props.
function WelcomeBanner() {
  // We can have internal logic if needed
  const message = "Welcome to Our Awesome App!";

  // It returns JSX describing the UI element
  return <h1>{message}</h1>;
}

// Export the component to make it available for import
export default WelcomeBanner;
