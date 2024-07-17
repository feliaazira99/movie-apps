import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-row w-full justify-between p-4 shadow-md">
      <h2 className="text-base text-lg font-semibold text-cyan-700">
        Movie-App
      </h2>
      <div className="flex flex-row gap-7">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movies</Link>
        <Link to={"/tvshow"}>Tv Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
