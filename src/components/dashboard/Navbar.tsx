import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Employee Dashboard</h2>
      <Link
          to="/employee"
        //   onClick={() => {
        //     Employe.setValue(true);
        //     Employe.setEmpId(null);
        //   }}
        >
        <button>Add Employee</button>
      </Link>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Navbar;
