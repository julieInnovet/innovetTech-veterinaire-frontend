import { useState } from "react"
import SearchBar from "./SearchBar"
import FilterDropdown from "./FilterDropdown"

const statusOptions = [
  { value: "all", label: "Tous" },
  { value: "pending", label: "En attente" },
  { value: "completed", label: "Terminé" },
]

const priorityOptions = [
  { value: "all", label: "Toutes" },
  { value: "high", label: "Haute" },
  { value: "medium", label: "Moyenne" },
  { value: "low", label: "Basse" },
]

export const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [status, setStatus] = useState("all")
  const [priority, setPriority] = useState("all")

  console.log("Search Query:", searchQuery)
  console.log("Status:", status)
  console.log("Priority:", priority)

  return (
    <div className="bg-white py-3">
      <h1 className="text-left font-bold text-3xl text-teal-700">Planification</h1>
      {" "}
      {/* Reduced padding */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold text-gray-900 mb-3 text-left">Filtres et Recherche</h1>{" "}
        {/* Reduced margin */}
        <div className="bg-white rounded-xl shadow-sm md:max-w-[77.5vw]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {" "}
            {/* Reduced gap and aligned items */}
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {" "}
                {/* Reduced margin */}
                Recherche
              </label>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {" "}
                {/* Reduced margin */}
                Statut
              </label>
              <FilterDropdown label="Statut" value={status} options={statusOptions} onChange={setStatus} />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {" "}
                {/* Reduced margin */}
                Priorité
              </label>
              <FilterDropdown label="Priorité" value={priority} options={priorityOptions} onChange={setPriority} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter

