import { useContext, useState } from "react"
import { dataContext } from "../store/dataContext";

const SortComponent = () => {

  const {sortByCountry, sortByDate, sortByName} = useContext(dataContext); 

  const [showMenu, setShowMenu] = useState<boolean>(false);
  document.addEventListener('click', () => setShowMenu(false));
  
  return (
    <div 
      className="relative flex gap-2 border-[1px] border-[#364153] rounded shadow px-4 py-2 items-center text-xl cursor-pointer"
      onClick={(e) => {e.stopPropagation(); setShowMenu(!showMenu)}}
    >
      <span>⇅</span>
      <span>Sort</span>
      <span className="text-sm">▽</span>

      <div 
        className="absolute top-10 left-0 bg-[#364153]"
        style={{display: showMenu ? "block" : "none"}}
      >
        <button 
          className="px-4 py-2 cursor-pointer hover:bg-[#101828] w-full"
          onClick={sortByName}
        >
          Name
        </button>
        <button 
          className="px-4 py-2 cursor-pointer hover:bg-[#101828] w-full"
          onClick={sortByCountry}
        >
          Country
        </button>
        <button 
          className="px-4 py-2 cursor-pointer hover:bg-[#101828] w-full"
          onClick={sortByDate}
        >
          Date
        </button>
      </div>
    </div>


  )
}

export default SortComponent