import { useState, useEffect } from "react";

function App() {
    const [hasError, setHasError] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasError(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {hasError ? (
                <p style={{ color: "red" }}>
                    Something went wrong!
                </p>
            ) : (
                <p style={{ color: "green" }}>
                    Data loaded successfully.
                </p>
            )}
        </>
    );
}

export default App;