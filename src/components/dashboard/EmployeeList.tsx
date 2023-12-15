export const EmployeeList = () => {
  return (
    <tbody>
      {/* {displayEmployeeList.map((employee) => (
              <tr key={employee.employeeId}>
                <td>{`${employee.fname} ${employee.lname}`}</td>
                <td>{employee.designation}</td>
                <td>{dateConvert(employee.doj)}</td>
                <td>{employee.experience}</td>
                <td>{employee.email}</td>
                <td>{dateConvert(employee.dob)}</td>
                <td>{employee.phoneNumber}</td>
                <td className="action-btn">
                  <Link
                  to="/employee"
                  onClick={() => {
                    Employe.setValue(false);
                    Employe.setEmpId(employee.employeeId);
                  }}
                  className="edit-btn"
                  >
                  <span>Edit</span>
                  </Link>
                  <span onClick={() => DeleteEmp({
                    empId: employee.employeeId,
                    empName: `${employee.fname} ${employee.lname}`,
                  })}>Delete</span>
                </td>
              </tr>
            ))} */}
    </tbody>
  );
};
