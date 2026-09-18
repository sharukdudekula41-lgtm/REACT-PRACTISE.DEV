function App() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? (
                <h2>Welcome User</h2>
            ) : (
                <h2>Please Login</h2>
            )}
        </div>
    );
}

export default App;