import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setError("Name is required");
        } else {
            setError("");
            alert("Form submitted");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={submitForm} style={styles.form}>

                <h2>Registration Form</h2>

                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                    }}
                    style={styles.input}
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
                    Submit
                </button>

            </form>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
        fontFamily: "Arial"
    },

    form: {
        width: "350px",
        padding: "35px",
        background: "white",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    },

    input: {
        width: "100%",
        boxSizing: "border-box",
        padding: "12px",
        marginTop: "15px",
        border: "1px solid #cbd5e1",
        borderRadius: "8px",
        fontSize: "16px"
    },

    error: {
        color: "red",
        fontSize: "14px"
    },

    button: {
        width: "100%",
        padding: "12px",
        marginTop: "10px",
        border: "none",
        borderRadius: "8px",
        background: "#4f46e5",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Form;