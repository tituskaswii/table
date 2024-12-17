import React from 'react';
import './Table.css';
import { FaTrash } from 'react-icons/fa';

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

  const renderCollaborators = (collaborators) => {
    const parts = collaborators.split(" ");
    let formattedParts = [];

    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "DR" && parts[i + 1] === "KHAN") {
        formattedParts.push(
          <span key={i + "-DR-KHAN"} className="collaborator-highlight">
            {parts[i]} {parts[i + 1]}
          </span>
        );
        i++;
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
            <th className="patient-name">PATIENT'S NAME</th>
            <th className="encounter-date">ENCOUNTERS DATE</th>
            <th className="status-container">STATUS</th>
            <th className="collaborators">COLLABORATORS</th>
            <th className="actions">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="patient-name">{row.name}</td>
              <td className="encounter-date">{row.date}</td>
              <td className="status-container">
                <span className={getStatusClass(row.status)}>{row.status}</span>
              </td>
              <td className="collaborators">{renderCollaborators(row.collaborators)}</td>
              <td className="actions">
                  <span class="delete-icon" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                  </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
