import React, { useState } from "react";

function AddClassroom({ classrooms, setClassrooms }) {
    const [roomId, setRoomId] = useState("");
    const [capacity, setCapacity] = useState("");
    const [floorNo, setFloorNo] = useState("");
    const [nearWashroom, setNearWashroom] = useState(false);

    const handleAdd = () => {
        if (!roomId || capacity <= 0 || floorNo < 0) {
            alert("Please enter valid classroom details");
            return;
        }

        const newRoom = {
            roomId,
            capacity: Number(capacity),
            floorNo: Number(floorNo),
            nearWashroom,
        };

        setClassrooms([...classrooms, newRoom]);

        setRoomId("");
        setCapacity("");
        setFloorNo("");
        setNearWashroom(false);
    };

    return (
        <div className="card">
            <h2>Add Classroom</h2>

            <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />

            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
            />

            <input
                type="number"
                placeholder="Floor Number"
                value={floorNo}
                onChange={(e) => setFloorNo(e.target.value)}
            />

            <label>
                <input
                    type="checkbox"
                    checked={nearWashroom}
                    onChange={(e) => setNearWashroom(e.target.checked)}
                />
                Near Washroom
            </label>

            <button onClick={handleAdd}>Add Classroom</button>
        </div>
    );
}

export default AddClassroom;
