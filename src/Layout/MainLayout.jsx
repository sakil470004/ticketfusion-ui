import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
