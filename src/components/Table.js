import React from 'react';
import './Table.css';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const Table = () => {
  const data = [
    {
      name: "John Smith",
      date: "Wed, Oct 9 2024, 10:36 AM",
      status: "Ready",
      collaborators: "DR KHAN HG HK +1",
    },
    {
      name: "John Smith",
      date: "Wed, Oct 9 2024, 10:36 AM",
      status: "Recording",
      collaborators: "DR KHAN HG EH-45 HG",
    },
    {
      name: "John Smith",
      date: "Wed, Oct 9 2024, 10:36 AM",
      status: "In Progress",
      collaborators: "DR KHAN HG HK +1",
    },
    {
      name: "John Smith",
      date: "Wed, Oct 9 2024, 10:36 AM",
      status: "Not Started",
      collaborators: "DR KHAN HG HK +1",
    },
  ];

  // Determine the status color dynamically
  const getStatusClass = (status) => {
    switch (status) {
      case "Ready":
        return "status ready";
      case "Recording":
        return "status recording";
      case "In Progress":
        return "status in-progress";
      case "Not Started":
        return "status not-started";
      default:
        return "status";
    }
  };

  // Function to split collaborators' text into individual parts
  const renderCollaborators = (collaborators) => {
    // Special case for "DR KHAN" to keep it as one unit
    const parts = collaborators.split(" ");
    let formattedParts = [];

    for (let i = 0; i < parts.length; i++) {
      // Check if it's "DR KHAN" and don't split it
      if (parts[i] === "DR" && parts[i + 1] === "KHAN") {
        formattedParts.push(
          <span key={i + "-DR-KHAN"} className="collaborator-highlight">
            {parts[i]} {parts[i + 1]}
          </span>
        );
        i++; // Skip the next part (KHAN)
      } else {
        formattedParts.push(
          <span key={i} className="collaborator-highlight">
            {parts[i]}
          </span>
        );
      }
    }

    return formattedParts;
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>PATIENT'S NAME</th>
            <th>ENCOUNTERS DATE</th>
            <th>STATUS</th>
            <th>COLLABORATORS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>
                <span className={getStatusClass(row.status)}>{row.status}</span>
              </td>
              <td>{renderCollaborators(row.collaborators)}</td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => alert("Delete action triggered")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
