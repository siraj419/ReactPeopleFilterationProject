import { FC } from "react";
import TableRow from "./TableRow";



const Table : FC<{data : any}> = ({data}) => {

  const tableCols = ["Image", "Name", "Country", "Email", "Project Name", "Task Progress", "Status", "Date", "Actions"];
  return (
    <table className="h-auto border-[1px] border-[#364153]"
      style={{padding: "100px"}}
    >
      <thead>
        <tr className="border-b-[1px] border-[#364153]">
          {
            tableCols.map((name, index)=> (
              <th className={`font-bold text-xl w-[150px] p-5 text-center`} key={index}>
                {name}
              </th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          data.map((dataItem : any, index : number) =>(
            <TableRow 
              dataItem={dataItem}
              key={index} 
            />
          ))          
        }
      </tbody>
    </table>
  )
}

export default Table