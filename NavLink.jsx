import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/products"></NavLink>
        </>
    );
}

export default App;