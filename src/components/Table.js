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
    const parts = collaborators.split(" "); // Split the string by spaces
    return parts.map((part, index) => (
      <span key={index} className="collaborator-highlight">
        {part}
      </span>
    ));
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
