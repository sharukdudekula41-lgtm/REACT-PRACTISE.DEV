import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component rendered");
}, []);

   return <h1>Hello React</h1>;

}       

export default App;