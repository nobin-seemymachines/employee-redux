// Dashboard.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import { Welcome } from "../components/dashboard/Welcome";
import { Search } from "../components/dashboard/Search";
import { EmployeeList } from "../components/dashboard/EmployeeList";
// import DeleteEmployee from "../components/Employee/DeleteEmployee";
// import { getEmployeeList } from "../services/api";

interface props {
  Employe: {
    setValue: any;
    setEmpId: any;
  };
}

interface deleteProps {
  empId: string;
  empName: string;
}

function Dashboard() {
  const [ShowDelete, setShowDelete] = useState<boolean>(false);
  const [employeeList, setEmployeeList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayEmployeeList, setDisplayEmployeeList] = useState<any[]>([]);

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="header">
        <Welcome />
      </div>
      <div>
        <Search />
      </div>
      <div className="employee-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Date of Joining</th>
              <th>Experience</th>
              <th>Email Address</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th className="action-head">Actions</th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <td>Loading...</td>
            </tbody>
          ) : (
            <EmployeeList />
          )}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
