import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import StickyNavbar from "../Components/Navbar/StickyNavbar";


  


const Main = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Adjust this value based on when you want the sticky navbar to appear
      if (offset > 100) {
        setShowStickyNavbar(true);
      } else {
        setShowStickyNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className="relative bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
      {/* navbar */}
      <Navbar></Navbar>
      {/* sticky navbar */}
      
      {
        showStickyNavbar && <div className="sticky top-0 z-50 transition-transform duration-500">
        <StickyNavbar></StickyNavbar>
      </div>
      }
      
      <div className="min-h-[calc(100vh-321px)]">
        {/* Outlet */}
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
