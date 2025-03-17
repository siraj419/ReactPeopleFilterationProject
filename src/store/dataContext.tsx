import { createContext, FC, ReactNode, useState } from "react";
import { data } from "../db/data";

const dataContext = createContext({
    data: data,
    filter: (_name:string, _country:string, _status:string, _email:string, _project:string) => {},
    sortByName: () => {},
    sortByCountry: () => {},
    sortByDate: () => {}
});

const DataProvider : FC<{children: ReactNode}> = ({children}) => {

    const [filteredData, setFilteredData] = useState(data);

    const filter = (name:string, country:string, status:string, email:string, project:string) => {
        console.log("HEllo from filter")
        setFilteredData(data.filter((dataItem)=>{
            return (name === "" || dataItem.client.toLowerCase().startsWith(name.toLowerCase())) &&
                   (country === "" || dataItem.country.toLowerCase().startsWith(country.toLowerCase())) &&
                   (status === "" || dataItem.status.toLowerCase().startsWith(status.toLowerCase())) &&
                   (email === "" || dataItem.email.toLowerCase().startsWith(email.toLowerCase())) &&
                   (project === "" || dataItem.project.toLowerCase().startsWith(project.toLowerCase()))
        }));
    }
    
    const sortByName = () => {
        const sortedData = [...filteredData];
        console.log("Sort by Name")
        sortedData.sort((a, b) => (
            (a.client < b.client) ? -1 : 1
        ))

        setFilteredData(sortedData)
    }
    const sortByCountry = () => {
        const sortedData = [...filteredData];
        sortedData.sort((a, b) => (
            (a.country < b.country) ? -1 : 1
        ))
        setFilteredData(sortedData)
    }
    const sortByDate = () => {
        const sortedData = [...filteredData];
        sortedData.sort((a, b) => (
            (a.date < b.date) ? -1 : 1
        ))
        setFilteredData(sortedData);
    }
  
   return (
    <dataContext.Provider value={{
        data: filteredData,
        filter,
        sortByName,
        sortByCountry,
        sortByDate
    }}>
        {children}
    </dataContext.Provider>
  )
}

export {
    dataContext,
    DataProvider
};
