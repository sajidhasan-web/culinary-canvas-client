import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
      {/* navbar */}
      <Navbar></Navbar>
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
