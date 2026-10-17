function App() {

    const students = [
        "Rahul",
        "Priya",
        "Amit",
        "Sneha",
        "Rohit"
    ];

    return (
        <div>
            {students.map((student) =>(
                <p key={student}>{student}</p>
            ))}
        </div>
    );
    
}

export default App;