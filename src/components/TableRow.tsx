import { FC, useState } from "react";
import { FaEllipsis } from "react-icons/fa6";

const TableRow : FC<{dataItem: any}> = ({dataItem}) => {
  const [status, setStatus] = useState<string>(dataItem.status);
  const [showActionMenu, setShowActionMenu] = useState<boolean>(false);
  document.addEventListener("click", () => showActionMenu && setShowActionMenu(false));

  return (
    <>
      <tr className="border-b-[1px] border-[#364153] p-0">
          <td className="px-5 py-2">
          <img 
              src={dataItem.image}
              alt={dataItem.client}
              className="w-[50px] h-[50px] rounded-full" 
          />
          </td>
          <td className="px-3 py-2 text-center">{dataItem.client}</td>
          <td className="px-3 py-2 text-center">{dataItem.country}</td>
          <td className="px-3 py-2 text-center">{dataItem.email}</td>
          <td className="px-3 py-2 text-center">{dataItem.project}</td>
          <td className="px-3 py-2 text-center">
          <div className="w-[100px] bg-gray-400 h-[10px] rounded-lg">
              <div 
              className={`h-[10px] rounded-lg bg-green-500`}
              style={{width: dataItem.progress}}
              ></div>
          </div>
          </td>
          <td
            className="px-3 py-2 text-center"
          >
            <span className={`${(status === "Completed") && "bg-green-500 py-1 px-2 rounded"}`}>
                {status}
            </span>
          </td>
          <td className="px-3 py-2 text-center">{dataItem.date}</td>
          <td className="px-3 py-2">
            <div className="flex items-center justify-center relative">
              <FaEllipsis 
                className="cursor-pointer"
                onClick={(e) =>{ e.stopPropagation(); setShowActionMenu(!showActionMenu)}}
              />

              {/* Status Menu */}
              <div className={`absolute top-5 z-10 bg-[#364153] ${!showActionMenu && "hidden"}`}>
                <button 
                  className="py-2 px-4 cursor-pointer"
                  onClick={() => setStatus("Completed")}
                >
                  Completed
                </button>
                <button 
                  className="py-2 px-4 cursor-pointer"
                  onClick={() => setStatus("In Progress") }
                >
                  In Progress
                </button>
              </div>
              
            </div>
          </td>
      </tr>

      
    </>
  )
}

export default TableRow;