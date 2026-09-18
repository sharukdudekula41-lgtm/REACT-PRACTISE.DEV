
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <p>{name}</p>   
        </>
    );
}
 export default App;