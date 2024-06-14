import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";


const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[pathname])
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
