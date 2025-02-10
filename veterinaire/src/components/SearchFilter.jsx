import { useState } from "react"
import SearchBar from "./SearchBar"
import FilterDropdown from "./FilterDropdown"

const statusOptions = [
  { value: "all", label: "Tous" },
  { value: "En attente", label: "En attente" },
  { value: "Annulé", label: "Annulé" },
  { value: "Terminé", label: "Terminé" },
]

const priorityOptions = [
  { value: "all", label: "Toutes" },
  { value: "Urgence", label: "Urgence" },
  { value: "Moyenne", label: "Moyenne" },
  { value: "Basse", label: "Basse" },
]

export const SearchFilter = ({ onStatusChange, onPriorityChange, onSearchChange, searchQuery }) => {
  const [status, setStatus] = useState("all")
  const [priority, setPriority] = useState("all")

  const handleStatusChange = (newStatus) => {
    console.log("SearchFilter - New Status:", newStatus)
    setStatus(newStatus)
    onStatusChange(newStatus)
  }

  const handlePriorityChange = (newPriority) => {
    console.log("SearchFilter - New Priority:", newPriority)
    setPriority(newPriority)
    onPriorityChange(newPriority)
  }

  const handleSearchChange = (newQuery) => {
    console.log("SearchFilter - New Search Query:", newQuery)
    onSearchChange(newQuery)
  }

  return (
    <div className="bg-white py-3">
      <h1 className="text-left font-bold text-3xl text-teal-700">Planification</h1>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold text-gray-900 mb-3 text-left">Filtres et Recherche</h1>
        <div className="bg-white rounded-xl shadow-sm md:max-w-[77.5vw]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <FilterDropdown label="Statut" value={status} options={statusOptions} onChange={handleStatusChange} />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Priorité</label>
              <FilterDropdown
                label="Priorité"
                value={priority}
                options={priorityOptions}
                onChange={handlePriorityChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

