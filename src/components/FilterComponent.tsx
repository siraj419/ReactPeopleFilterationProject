import { useContext, useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import { dataContext } from "../store/dataContext";


const FilterComponent = () => {

  const {filter} = useContext(dataContext);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  document.addEventListener('click', () => setShowMenu(false));

  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [project, setProject] = useState<string>("");

  useEffect(()=>{
    filter(name, country, status, email, project);
  }, [name, country, status, email, project]);

  return (
    <button 
      className="relative flex gap-2 border-[1px] border-[#364153] rounded shadow px-4 py-2 items-center text-xl cursor-pointer"
      onClick={(e) => {e.stopPropagation(); setShowMenu(!showMenu)}}
    >
      <FaFilter size={15}/>
      <span>Filter</span>
      <span className="text-sm">▽</span>

      <div 
        className="absolute top-10 left-0 bg-[#364153] px-4 py-3 flex flex-col gap-2"
        style={{display: showMenu ? "flex" : "none"}}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-1">
          <label 
            htmlFor="name"
            className="text-[16px] text-left"
          >
            Filter by Name
          </label>
          <input 
            id="name" 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#101828] px-2 py-1 w-[200px] rounded"
           />
        </div>
        
        <div className="flex flex-col gap-1">
          <label 
            htmlFor="country"
            className="text-[16px] text-left"
          >
            Filter by Country
          </label>
          <input 
            id="country" 
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-[#101828] px-2 py-1 w-[200px] rounded"
           />
        </div>
        
        <div className="flex flex-col gap-1">
          <label 
            htmlFor="email"
            className="text-[16px] text-left"
          >
            Filter by Email
          </label>
          <input 
            id="email" 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#101828] px-2 py-1 w-[200px] rounded"
           />
        </div>
        
        <div className="flex flex-col gap-1">
          <label 
            htmlFor="project"
            className="text-[16px] text-left"
          >
            Filter by Project
          </label>
          <input 
            id="project" 
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="bg-[#101828] px-2 py-1 w-[200px] rounded"
           />
        </div>
        
        <div className="flex flex-col gap-1">
          <label 
            htmlFor="status"
            className="text-[16px] text-left"
          >
            Filter by Status
          </label>
          <input 
            id="status" 
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#101828] px-2 py-1 w-[200px] rounded"
           />
        </div>
      </div>

    </button>
  )
}

export default FilterComponent