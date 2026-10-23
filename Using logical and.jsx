
function App() {

    const isAdmin = true;

    return (
        <>
        <h1>Dashboard </h1>

        {isAdmin && <h2>You are an admin</h2>}
        </>
    );
}

export default App;