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
            {students.map((student, index) =>(
                <p key={index}>{student}</p>
            ))}
        </div>
    );
    
}

export default App;