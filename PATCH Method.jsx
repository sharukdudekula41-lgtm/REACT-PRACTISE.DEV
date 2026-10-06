import { useState } from "react";

function App() {
    const [email, setEmail] = useState("old@example.com");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function updateEmail() {
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1",
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();

            console.log(data);

            setMessage(
                `Email updated successfully to: ${data.email} ✅`
            );
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong ❌");
        }

        setLoading(false);
    }

    return (
        <div style={styles.page}>

            <div style={styles.card}>

                <h1>Update Email 📧</h1>

                <p style={styles.text}>
                    Enter a new email address
                </p>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />

                <button
                    onClick={updateEmail}
                    disabled={loading}
                    style={styles.button}
                >
                    {loading ? "Updating..." : "Update Email"}
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
        fontFamily: "Arial"
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
        color: "#64748b"
    },

    input: {
        width: "100%",
        boxSizing: "border-box",
        padding: "13px",
        border: "1px solid #cbd5e1",
        borderRadius: "8px",
        margin: "15px 0"
    },

    button: {
        width: "100%",
        padding: "13px",
        border: "none",
        borderRadius: "8px",
        background: "#4f46e5",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    },

    message: {
        marginTop: "20px",
        color: "#16a34a",
        fontWeight: "bold"
    }
};

export default App;