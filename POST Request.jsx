async function registerUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Sharukh",
                email: "dudekulsharukh4@gmail.com"
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

function App() {
    return (
        <div>
            <h1>User Registration</h1>

            <button onClick={registerUser}>
                Register User
            </button>
        </div>
    );
}

export default App;