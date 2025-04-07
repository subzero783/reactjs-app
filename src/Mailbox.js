// Demonstrates conditional rendering using the logical AND (&&) operator
// Receives an array of messages as a prop
function Mailbox({ unreadMessages }) {
  // Calculate the count (handle potential null/undefined prop)
  const count = unreadMessages ? unreadMessages.length : 0;

  console.log(`Rendering Mailbox. Unread count: ${count}`);

  return (
    <div style={{ border: "1px solid green", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>Mailbox Example (&&)</h2>
      <h1>Hello!</h1>
      {/* Use logical && for conditional rendering */}
      {/* If count > 0 is true, the expression evaluates to the <h2> element */}
      {/* If count > 0 is false, the expression evaluates to false, and React renders nothing */}
      {count > 0 && <h2 style={{ backgroundColor: "yellow", padding: "5px" }}>You have {count} unread messages.</h2>}
      <p>This is your mailbox content area.</p>
      <p style={{ fontSize: "0.8em" }}>(Message count only appears if > 0)</p>
    </div>
  );
}

export default Mailbox;
