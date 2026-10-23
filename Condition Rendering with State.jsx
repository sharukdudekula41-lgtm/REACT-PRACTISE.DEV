
import { useState } from "react";

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <>
        {isLoggedIn ? (
            <h1>Welcome to Dashboard</h1>
        ) : (
            <h1>Please Login</h1>
        )}

        <button onClick={() => setLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
        </>
    );
}

export default App;