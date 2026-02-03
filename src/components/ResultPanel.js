import React from "react";

function ResultPanel({ result }) {
    if (!result) return null;

    return (
        <div className="card">
            <h2>Allocation Result</h2>

            {!result.success ? (
                <p className="error">{result.message}</p>
            ) : (
                <ul>
                    {result.allocated.map((room, index) => (
                        <li
                            key={index}
                            style={{
                                borderLeft: room.nearWashroom
                                    ? "4px solid #43cea2"
                                    : "4px solid #667eea"
                            }}
                        >
                            {room.roomId} — {room.capacity} seats (Floor {room.floorNo})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ResultPanel;
