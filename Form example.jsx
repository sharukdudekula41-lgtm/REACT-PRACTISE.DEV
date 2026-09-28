import { useState } from "react";

function App() {
    const [page, setPage] = useState("signup");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [error, setError] = useState("");

    // SIGN UP
    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Please fill all fields");
            return;
        }

        // Save signup details
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        setError("");

        // Go to Login
        setPage("login");
    };

    // LOGIN
    const handleLogin = (e) => {
        e.preventDefault();

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (
            loginEmail === savedEmail &&
            loginPassword === savedPassword
        ) {
            setError("");
            setPage("welcome");
        } else {
            setError("Invalid email or password");
        }
    };

    // WELCOME PAGE
    if (page === "welcome") {
        return (
            <div style={styles.page}>
                <div style={styles.welcomeCard}>

                    <div style={styles.successIcon}>
                        ✓
                    </div>

                    <h1>Welcome, {name}! 🎉</h1>

                    <p>
                        You have successfully logged in.
                    </p>

                    <button
                        style={styles.button}
                        onClick={() => {
                            setPage("login");
                            setLoginEmail("");
                            setLoginPassword("");
                        }}
                    >
                        Logout
                    </button>

                </div>
            </div>
        );
    }

    // SIGNUP PAGE
    if (page === "signup") {
        return (
            <div style={styles.page}>
                <div style={styles.card}>

                    <h1>Create Account</h1>

                    <p style={styles.subtitle}>
                        Sign up to get started
                    </p>

                    <form onSubmit={handleSignup}>

                        <label>Name</label>

                        <input
                            style={styles.input}
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />

                        <label>Email</label>

                        <input
                            style={styles.input}
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <label>Password</label>

                        <input
                            style={styles.input}
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        {error && (
                            <p style={styles.error}>
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            style={styles.button}
                        >
                            Sign Up
                        </button>

                    </form>

                    <p style={styles.bottomText}>
                        Already have an account?
                        <button
                            onClick={() => setPage("login")}
                            style={styles.linkButton}
                        >
                            Login
                        </button>
                    </p>

                </div>
            </div>
        );
    }

    // LOGIN PAGE
    return (
        <div style={styles.page}>
            <div style={styles.card}>

                <h1>Welcome Back 👋</h1>

                <p style={styles.subtitle}>
                    Login to your account
                </p>

                <form onSubmit={handleLogin}>

                    <label>Email</label>

                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Enter your email"
                        value={loginEmail}
                        onChange={(e) =>
                            setLoginEmail(e.target.value)
                        }
                    />

                    <label>Password</label>

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) =>
                            setLoginPassword(e.target.value)
                        }
                    />

                    {error && (
                        <p style={styles.error}>
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        style={styles.button}
                    >
                        Login
                    </button>

                </form>

                <p style={styles.bottomText}>
                    Don't have an account?

                    <button
                        onClick={() => setPage("signup")}
                        style={styles.linkButton}
                    >
                        Sign Up
                    </button>
                </p>

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
        background:
            "linear-gradient(135deg, #eef2ff, #f8fafc)",
        fontFamily: "Arial, sans-serif"
    },

    card: {
        width: "380px",
        padding: "40px",
        background: "white",
        borderRadius: "20px",
        boxShadow:
            "0 15px 40px rgba(0,0,0,0.1)"
    },

    welcomeCard: {
        width: "450px",
        padding: "50px",
        background: "white",
        borderRadius: "25px",
        textAlign: "center",
        boxShadow:
            "0 20px 50px rgba(0,0,0,0.12)"
    },

    successIcon: {
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
    },

    subtitle: {
        color: "#64748b",
        marginBottom: "30px"
    },

    input: {
        width: "100%",
        boxSizing: "border-box",
        padding: "14px",
        marginTop: "8px",
        marginBottom: "18px",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        outline: "none",
        fontSize: "15px"
    },

    button: {
        width: "100%",
        padding: "14px",
        border: "none",
        borderRadius: "10px",
        background: "#4f46e5",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "10px"
    },

    error: {
        color: "#ef4444",
        fontSize: "14px"
    },

    bottomText: {
        textAlign: "center",
        marginTop: "25px",
        color: "#64748b"
    },

    linkButton: {
        border: "none",
        background: "none",
        color: "#4f46e5",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: "5px"
    }
};

export default App;