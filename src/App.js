// Import the components we defined
import UserProfile from "./UserProfile";
import Card from "./Card";
// import './App.css'; // Optional CSS import

// Define the main App component
function App() {
  // Data for UserProfile components
  const user1 = {
    id: 1,
    name: "Carlos",
    email: "carlos@example.com",
    age: 30,
  };
  const user2 = {
    id: 2,
    name: "Diana",
    email: "diana@sample.net",
    age: 28,
  };
  const user3 = {
    id: 3,
    name: "Jordan",
    email: "jordan@react.dev",
    age: 25,
  };

  return (
    <div /* className="App" */ style={{ fontFamily: "sans-serif", padding: "10px" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center", marginBottom: "20px" }}>
        <h1>Lesson 6: Props Examples</h1>
      </header>

      {/* === Using UserProfile === */}
      <h2>User Profiles:</h2>
      {/* Pass data to UserProfile instances via props */}
      <UserProfile
        name={user1.name}
        email={user1.email}
        age={user1.age}
      />
      <UserProfile
        name={user2.name}
        email={user2.email}
        age={user2.age}
      />
      {/* Example passing only some props */}
      <UserProfile
        name="Guest"
        email="guest@anon.com"
      />

      <hr style={{ margin: "30px 0" }} />

      {/* === Using Card with props.children === */}
      <h2>Card Examples:</h2>
      {/* Use the Card component, passing a title prop */}
      {/* The elements BETWEEN the <Card> tags become props.children */}
      <Card title="User Information Card">
        {/* This is props.children */}
        <p>This card contains details for a user.</p>
        {/* We can even nest other components inside */}
        <UserProfile
          name={user3.name}
          email={user3.email}
          age={user3.age}
        />
        <button style={{ marginTop: "10px" }}>Contact {user3.name}</button>
        {/* End of props.children */}
      </Card>

      <Card title="Another Section Card">
        {/* Different children for the second card */}
        <p>Some other distinct content goes here.</p>
        <a href="#">Learn More</a>
      </Card>
    </div>
  );
}

// Export the App component
export default App;
