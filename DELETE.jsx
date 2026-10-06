import { useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    async function deleteUser(id) {
        setMessage("Deleting...");

        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error("Delete failed");
            }

            setMessage(`User ${id} deleted successfully ✅`);

        } catch (error) {
            console.error(error);
            setMessage("Delete failed ❌");
        }
    }

    return (
        <div style={styles.page}>

            <div style={styles.card}>

                <h1>Delete User 🗑️</h1>

                <p style={styles.text}>
                    Click the button to delete User 1.
                </p>

                <button
                    onClick={() => deleteUser(1)}
                    style={styles.button}
                >
                    Delete User
                </button>

                {message && (
                    <p style={styles.message}>
                        {message}
                    </p>
                )}

            </div>

        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
        fontFamily: "Arial, sans-serif"
    },

    card: {
        width: "350px",
        padding: "35px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center"
    },

    text: {
        color: "#64748b",
        marginBottom: "25px"
    },

    button: {
        padding: "13px 25px",
        border: "none",
        borderRadius: "8px",
        background: "#ef4444",
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
        cursor: "pointer"
    },

    message: {
        marginTop: "20px",
        fontWeight: "bold"
    }
};

export default App;