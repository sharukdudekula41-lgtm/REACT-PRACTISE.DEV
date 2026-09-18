import { useState } from "react";

function App() {

    const [show, setShow] = useState(true);

    return (
        <>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <h2>Welcome to React</h2>}
        </>
    );
}

export default App;