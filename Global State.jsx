
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
    const user = "Sharukh";

    return (
        <UserContext.Provider value={user}>
            <Navbar />
            <Profile />
           </UserContext.Provider> 
    );
}

function Navbar() {
    const user = useContext(UserContext);

    return <h2>Welcome, {user}</h2>;
}

function Profile() {
    const user = useContext(UserContext);

    return <p>Profile of {user}</p>;
}

export default App;