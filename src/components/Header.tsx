import FilterComponent from "./FilterComponent"
import SortComponent from "./SortComponent"

const Header = () => {
  return (
    <header className="flex gap-5">
      <SortComponent />
      <FilterComponent />
    </header>
  )
}

export default Header