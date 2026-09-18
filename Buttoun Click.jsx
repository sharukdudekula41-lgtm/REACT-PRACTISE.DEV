function App() {

    function handClick() {
        alert("Button clicked!");
    }

    return (
        <button onClick={handClick}>Click Me</button>
    );
}

export default App

