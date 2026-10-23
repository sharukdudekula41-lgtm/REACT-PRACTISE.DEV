
import { useMemo } from "react";

function App() {

    const result = useMemo(() => {

        console.log("Calculating....");

        return 100 * 200;
    }, []);

    return <h1>{result}</h1>
