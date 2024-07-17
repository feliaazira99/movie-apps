import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  //mengambil value path pada url yang sudah dideklarasikan di routes
  const { pathname } = useLocation();

  // untuk mengambil value token dari localstorage menggunakan get item
  const token = localStorage.getItem("token");

  //halaman apa aja yang ingin diprotected
  const tokenProtected = ["/", "/details/:id", "/movie", "/tvshow"];

  //halaman apa aja yang ingin diakses public
  const publicProtected = ["/login"];

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/login"} />;
    }
  }
  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
