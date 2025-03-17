import { useContext, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { dataContext } from "./store/dataContext";

const itemsPerPage  = 4;

const App = () => {

  const {data} = useContext(dataContext);
  
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="h-[100vh] flex text-white">
      <Sidebar />
      <main className="bg-[#101828] w-full p-5 flex flex-col justify-between">
          <Header />
          <Table data={currentItems}/>
          <Pagination 
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />   
      </main>
    </div>
  );
};

export default App;