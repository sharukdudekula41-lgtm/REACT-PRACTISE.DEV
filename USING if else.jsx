import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const isLoggedIn = false;

    if (isLoggedIn) {
        return (
            <div className="container text-center mt-5">
                <h1 className="text-success">
                    Welcome to Dashboard
                </h1>
            </div>
        );
    }

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "400px",
                    borderRadius: "20px"
                }}
            >

                <div className="text-center mb-4">
                    <h2 className="fw-bold">Welcome Back 👋</h2>
                    <p className="text-muted">
                        Please login to your account
                    </p>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter your password"
                    />
                </div>

                <button className="btn btn-primary btn-lg w-100">
                    Login
                </button>

                <p className="text-center mt-3 mb-0">
                    Don't have an account?
                    <a href="#" className="ms-1">
                        Sign Up
                    </a>
                </p>

            </div>

        </div>
    );
}

export default App;