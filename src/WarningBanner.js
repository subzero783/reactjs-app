// Demonstrates preventing rendering by returning null
function WarningBanner({ showWarning }) {
  // Receives a boolean prop

  console.log(`Rendering WarningBanner. showWarning is: ${showWarning}`);

  // If the prop is falsey (false, null, undefined, 0, '', etc.),
  // return null to render nothing for this component.
  if (!showWarning) {
    return null;
  }

  // Otherwise (if showWarning is truthy), render the warning message
  return (
    <div
      style={{
        color: "#8a6d3b", // Dark yellow text
        backgroundColor: "#fcf8e3", // Light yellow background
        border: "1px solid #faebcc", // Slightly darker yellow border
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <strong>Warning!</strong> This is a warning message.
    </div>
  );
}

export default WarningBanner;
