import { useState } from "react";

function App() {

    const [page, setPage] = useState("login");

    function handleLogin() {
        setPage("dashboard");
    }

    function handleLogout() {
        setPage("login");
    }

    return (
        <div style={styles.page}>

            {page === "login" ? (

                // LOGIN PAGE
                <div style={styles.card}>

                    <h1>Welcome Back 👋</h1>

                    <p style={styles.text}>
                        Login to continue
                    </p>

                    <input
                        type="email"
                        placeholder="Email"
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        style={styles.input}
                    />

                    <button
                        onClick={handleLogin}
                        style={styles.button}
                    >
                        Login
                    </button>

                </div>

            ) : (

                // DASHBOARD PAGE
                <div style={styles.dashboard}>

                    <div style={styles.success}>
                        ✓
                    </div>

                    <h1>Welcome! 🎉</h1>

                    <p style={styles.text}>
                        You have successfully logged in.
                    </p>

                    <button
                        onClick={handleLogout}
                        style={styles.logout}
                    >
                        Logout
                    </button>

                </div>

            )}

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
        padding: "40px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
        textAlign: "center"
    },

    dashboard: {
        width: "450px",
        padding: "50px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
        textAlign: "center"
    },

    text: {
        color: "#64748b",
        marginBottom: "25px"
    },

    input: {
        width: "100%",
        boxSizing: "border-box",
        padding: "13px",
        marginBottom: "15px",
        border: "1px solid #cbd5e1",
        borderRadius: "8px",
        fontSize: "15px"
    },

    button: {
        width: "100%",
        padding: "13px",
        border: "none",
        borderRadius: "8px",
        background: "#4f46e5",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    },

    logout: {
        padding: "12px 30px",
        border: "none",
        borderRadius: "8px",
        background: "#ef4444",
        color: "white",
        cursor: "pointer"
    },

    success: {
        width: "70px",
        height: "70px",
        margin: "0 auto 20px",
        borderRadius: "50%",
        background: "#22c55e",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px"
    }
};

export default App;