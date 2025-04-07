// Demonstrates a simple onClick event handler
function ClickButton() {
  // 1. Define the event handler function
  // This function will be executed when the button is clicked
  function handleButtonClick() {
    console.log("Button was clicked!");
    alert("You clicked the button!");
  }

  console.log("Rendering ClickButton component..."); // Log to show render vs. click

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Basic Click Handler</h2>
      {/* 2. Attach the handler function reference to the onClick prop */}
      {/* Pass the function itself, don't call it here with () */}
      <button onClick={handleButtonClick}>Click Me</button>
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Check console and alert pop-up on click)</p>
    </div>
  );
}

export default ClickButton;
