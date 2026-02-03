import './App.css';
import React, { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";
import ResultPanel from "./components/ResultPanel";

function App() {
  const [classrooms, setClassrooms] = useState([]);
  const [result, setResult] = useState(null);

  const allocateExam = (totalStudents) => {
    if (classrooms.length === 0) {
      setResult({ success: false, message: "No classrooms available" });
      return;
    }

    let remaining = totalStudents;

    const sortedRooms = [...classrooms].sort(
      (a, b) => a.floorNo - b.floorNo
    );

    let allocated = [];

    for (let room of sortedRooms) {
      if (remaining <= 0) break;
      allocated.push(room);
      remaining -= room.capacity;
    }

    if (remaining > 0) {
      setResult({ success: false, message: "Not enough seats available" });
    } else {
      setResult({ success: true, allocated });
    }
  };

  return (
    <div className="container">
      <h1>College Exam Seat Planner</h1>

      <AddClassroom classrooms={classrooms} setClassrooms={setClassrooms} />

      <ClassroomList classrooms={classrooms} />

      <AllocateExam allocateExam={allocateExam} />

      <ResultPanel result={result} />
    </div>
  );
}

export default App;
