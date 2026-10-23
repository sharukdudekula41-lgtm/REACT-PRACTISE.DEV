function App() {

    const isLoggedIn = true;

    return (
        <h1>
            {isLoggedIn  ? "Welcome to Dashboard" : "Please login to your account"}
            </h1>
    );
}

export default App;