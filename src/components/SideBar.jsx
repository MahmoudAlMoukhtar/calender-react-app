import {Link, NavLink} from "react-router-dom";
import {SlCalender} from "react-icons/sl";
import {FaBookOpen} from "react-icons/fa";
import {RiFilePaperFill} from "react-icons/ri";
import {BsPersonLinesFill} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {MdOutlineEventAvailable} from "react-icons/md";
import {SlLogout} from "react-icons/sl";
const activeStyle = {
  color: "#be185d",
  backgroundColor: "#cbd5e1",
  borderRadius: "4px",
};

const SideBar = () => {
  return (
    <nav className="bg-white flex flex-col gap-4 pl-4  items-start justify-center max-w-max	h-screen text-sm">
      <div className="bg-white flex flex-col gap-12 items-start justify-center max-w-max	h-screen	 text-sm">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-[#be185d] font-semibold">YOUR PATH</h3>
          <NavLink
            to={"/Agenda"}
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#be185d] font-semibold flex justify-center items-center gap-2 p-2"
          >
            <SlCalender /> Agenda
          </NavLink>
          <NavLink
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#2D224C] font-semibold flex justify-center items-center gap-2"
          >
            <FaBookOpen />
            Excercice
          </NavLink>
          <NavLink
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#2D224C] font-semibold flex justify-center items-center gap-2"
          >
            <RiFilePaperFill />
            material
          </NavLink>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-[#be185d] font-semibold">YOUR PROFILE</h3>

          <NavLink
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#2D224C] font-semibold flex items-center gap-2"
          >
            <BsPersonLinesFill /> Personal Information
          </NavLink>
          <NavLink
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#2D224C] font-semibold flex justify-center items-center gap-2"
          >
            <BiSearchAlt /> Invoices
          </NavLink>
          <NavLink
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            className="text-[#2D224C] font-semibold flex justify-center items-center gap-2"
          >
            <MdOutlineEventAvailable /> Availability
          </NavLink>
        </div>
      </div>
      <button className="flex gap-2 items-center">
        <SlLogout className="my-4" size={30} /> Logout
      </button>
    </nav>
  );
};

export default SideBar;
