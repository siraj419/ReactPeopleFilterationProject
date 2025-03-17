import { FC } from "react";

interface PaginationShape{
  pageCount: number,
  currentPage: number,
  setCurrentPage: (page : number) => void
};

const Pagination : FC<PaginationShape> = ({pageCount, currentPage, setCurrentPage}) => {

  const next = () => {
    if((currentPage+1) < pageCount)
      setCurrentPage(currentPage+1)
  }

  const prev = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage-1)
  }

  return (
    <nav className="flex gap-8 items-center justify-end">
      <button 
        className="text-white px-4 py-2 bg-[#364153] disabled:opacity-60 cursor-pointer"
        onClick={prev}
        disabled={currentPage <= 0}
      >
        Previous
      </button>
      <span>
        Page {pageCount ? currentPage+1 : 0} of {pageCount}
      </span>
      <button 
        className="text-white px-4 py-2 bg-[#364153] disabled:opacity-60 cursor-pointer"
        onClick={next}
        disabled={(currentPage+1) >= pageCount}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination;