import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import "../ui/globals.css";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="h-screen  w-1/5  bg-white shadow-sm ">
        <Sidebar />
      </div>
      <div className=" h-screen  w-4/5  bg-gray-100  ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
