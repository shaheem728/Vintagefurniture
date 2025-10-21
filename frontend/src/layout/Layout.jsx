import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBarLayout from "./NavBarLayout";

const Layout = () => {
  return (
    <>
      <NavBarLayout />
      <Outlet />   {/* Page content will load here */}
      <Footer />
    </>
  );
};

export default Layout;
