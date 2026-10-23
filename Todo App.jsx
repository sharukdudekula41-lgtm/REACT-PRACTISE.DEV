
import { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task === "") return;

        setTodos([...todos, task]);
        setTask("");
    };

    return (
        <div>
            <h2>Todo App</h2>

            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task" />

            <button onClick={addTodo}>Add</button>
            <ul>
            {todos.map((todo, index) => (

            ))}
            </ul>
            </div>
    );
}

export default TodoApp;