function App() {

    const students = [
        {
            id: 1,
            name: "Rahul",
            age: 20

        },
        {
            id: 2,
            name: "Priya",
            age: 22
        },
        {
            id: 3,
            name: "Amit",
            age: 21
        }
    ];

    return (
        <div>
            {students.map((student) => (
                <p key={student.id}>{student.name} - {student.age}</p>
            ))}
        </div>
    );

}

export default App;