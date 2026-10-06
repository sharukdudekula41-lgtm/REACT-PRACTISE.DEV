import { useState } from "react";

function App() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function updateUser() {

        setLoading(true);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: "Sharukh",
                        email: "new@example.com"
                    })
                }
            );

            const result = await response.json();

            setData(result);
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }

    return (
        <div style={{
            textAlign: "center",
            marginTop: "50px"
        }}>

            <h1>Update User</h1>

            <button onClick={updateUser}>
                {loading ? "Updating..." : "Update User"}
            </button>

            {data && (
                <div>
                    <h2>User Updated Successfully ✅</h2>

                    <p>
                        <b>ID:</b> {data.id}
                    </p>

                    <p>
                        <b>Name:</b> {data.name}
                    </p>

                    <p>
                        <b>Email:</b> {data.email}
                    </p>
                </div>
            )}

        </div>
    );
}

export default App;