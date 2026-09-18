import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>

      <h1
        style={{
          color: darkMode ? "white" : "black",
          backgroundColor: darkMode ? "black" : "white",
          padding: "20px",
        }}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
    </>
  );
}

export default App;