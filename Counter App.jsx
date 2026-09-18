import { usestate} from "react";

function App() {

    const [count, setcount] = useState(0);

    return (
        <>
        <h1>{count}</h1>

        <button onClick={() => setcount(count + 1)}>Increment</button>
        <button onClick={() => setcount(count - 1)}>Decrement</button>
        </>
    );
}

export default App;