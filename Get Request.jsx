import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>User Details</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          {Object.entries(user).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong>{" "}
              {typeof value === "object"
                ? JSON.stringify(value)
                : value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;