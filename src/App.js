import UserProfile from "./UserProfile"; // Import the UserProfile component
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  // --- Examples of JSX Syntax from Lesson ---

  // 1. Basic JSX element assigned to a variable
  const simpleGreeting = <h1>Hello from a JSX variable!</h1>;

  // 2. Embedding JavaScript expressions {}
  const userName = "Learner";
  const calculation = 5 * 10;
  const dynamicElement = (
    <p>
      Welcome, {userName}! The result is {calculation}.
    </p>
  );

  // 3. Data for our UserProfile components
  const user1 = {
    firstName: "Alice",
    lastName: "Wonder",
    email: "alice@example.com",
    avatarUrl: "https://placehold.co/80x80/a9dff7/333?text=AW", // Placeholder image URL
  };

  const user2 = {
    firstName: "Bob",
    lastName: "Builder",
    email: "bob@example.com",
    avatarUrl: "https://placehold.co/80x80/f7d4a9/333?text=BB", // Placeholder image URL
  };

  // --- Render the App UI ---
  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif" }}>
      <header /* className="App-header" */ style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center" }}>
        <h1>Lesson 4: JSX Examples</h1>
      </header>

      <section style={{ padding: "20px" }}>
        <h2>Basic JSX Examples:</h2>
        {simpleGreeting} {/* Render the JSX variable */}
        {dynamicElement} {/* Render the element with embedded expressions */}
      </section>

      <hr />

      <section style={{ padding: "20px" }}>
        <h2>Using the UserProfile Component:</h2>
        {/* Use the UserProfile component, passing data via props */}
        <UserProfile
          firstName={user1.firstName}
          lastName={user1.lastName}
          email={user1.email}
          avatarUrl={user1.avatarUrl}
        />
        <UserProfile
          firstName={user2.firstName}
          lastName={user2.lastName}
          email={user2.email}
          avatarUrl={user2.avatarUrl}
        />
      </section>
    </div>
  );
}

// Export the App component
export default App;
