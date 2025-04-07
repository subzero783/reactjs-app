// 1. Import styles object from the .module.css file
// The name 'styles' is a convention, but can be anything
import styles from "./Button.module.css";

// Demonstrates using CSS Modules for locally scoped styles
function ModularButton() {
  // 2. Access the generated, unique class name via the 'styles' object
  // styles.errorButton might map to something like 'Button_errorButton__aB3xY'
  const errorButtonClassName = styles.errorButton;
  const successButtonClassName = styles.successButton;

  console.log("Rendering ModularButton. CSS Module classes:", styles);

  return (
    <div style={{ border: "1px solid orange", padding: "15px", margin: "10px", borderRadius: "5px" }}>
      <h2>CSS Modules Example</h2>
      {/* 3. Apply the unique class name using the className prop */}
      <button className={errorButtonClassName}>Error Button (CSS Module)</button>
      <button className={successButtonClassName}>Success Button (CSS Module)</button>
      {/* Example combining classes (if needed): */}
      {/* <button className={`${styles.errorButton} ${styles.someOtherClass}`}>...</button> */}
      <p style={{ fontSize: "0.8em", marginTop: "10px" }}>(Inspect element to see generated unique class names)</p>
    </div>
  );
}

export default ModularButton;
