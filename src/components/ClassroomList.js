import React from "react";

function ClassroomList({ classrooms }) {
    return (
        <div className="card">
            <h2>All Classrooms</h2>

            {classrooms.length === 0 ? (
                <p>No classrooms added</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Room ID</th>
                            <th>Capacity</th>
                            <th>Floor</th>
                            <th>Washroom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classrooms.map((room, index) => (
                            <tr key={index}>
                                <td>{room.roomId}</td>
                                <td>{room.capacity}</td>
                                <td>{room.floorNo}</td>
                                <td>
                                    {room.nearWashroom ? (
                                        <span className="badge washroom">Near Washroom</span>
                                    ) : (
                                        <span className="badge normal">Not Near</span>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ClassroomList;
