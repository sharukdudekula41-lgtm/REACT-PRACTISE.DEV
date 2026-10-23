import { useState, useEffect } from "react";

function App() {
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStatus("loaded");
        }, 3000);

        const timer2 = setTimeout(() => {
            setStatus("dataLoaded");
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            {status === "loading" && <h1>Loading...</h1>}

            {status === "loaded" && <h1>Loaded...</h1>}

            {status === "dataLoaded" && <h1>Data Loaded</h1>}
        </>
    );
}

export default App;