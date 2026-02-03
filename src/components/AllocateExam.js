import React, { useState } from "react";

function AllocateExam({ allocateExam }) {
    const [students, setStudents] = useState("");

    const handleAllocate = () => {
        if (students <= 0) {
            alert("Enter valid number of students");
            return;
        }
        allocateExam(Number(students));
    };

    return (
        <div className="card">
            <h2>Allocate Exam Seats</h2>

            <input
                type="number"
                placeholder="Total Students"
                value={students}
                onChange={(e) => setStudents(e.target.value)}
            />

            <button onClick={handleAllocate}>Allocate</button>
        </div>
    );
}

export default AllocateExam;
