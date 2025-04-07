// 1. Import the CSS file (applies globally or scoped depending on build setup)
import "./MyComponent.css";

// Demonstrates using plain CSS files
function MyComponent() {
  // Example condition to apply modifier class
  const isLarge = true;

  // 2. Build the className string
  // Start with the base class
  let boxClasses = "infoBox";
  // Conditionally add the modifier class
  if (isLarge) {
    boxClasses += " infoBox--large"; // Remember the space!
  }
  // In real apps, consider the 'classnames' library for complex cases:
  // import cn from 'classnames';
  // const boxClasses = cn('infoBox', { 'infoBox--large': isLarge });

  console.log("Rendering MyComponent with classes:", boxClasses);

  return (
    // 3. Use the 'className' prop to apply the CSS classes
    <div className={boxClasses}>Styled with Plain CSS! (Check .infoBox class)</div>
  );
}

export default MyComponent;
