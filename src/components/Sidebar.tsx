import { FaFolder, FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside 
      className="bg-[#101828] border-r-[1px] border-[#364153] p-5 flex flex-col gap-12"
    >
      <h1 className="text-xl font-bold">Logo</h1>
      <nav className=" flex flex-col items-center gap-12">
        <FaFolder size={24} className="text-yellow-300"/>
        <FaUser size={24} className="text-blue-500"/>
        <IoIosSettings size={24} className="text-gray-300"/>
      </nav>
    </aside>
  )
}

export default Sidebar