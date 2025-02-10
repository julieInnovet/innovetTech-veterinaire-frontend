"use client"

import { useState } from "react"
import { Pagination } from "./pagination"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePatientContext } from "../PatientContext"

const ITEMS_PER_PAGE = 3

export const Fildattente = ({ selectedStatus = "all", selectedPriority = "all", searchQuery = "" }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { patients, updatePatientStatus } = usePatientContext()

  const filteredData = patients.filter((patient) => {
    const statusMatch = selectedStatus === "all" || patient.status.toLowerCase() === selectedStatus.toLowerCase()
    const priorityMatch = selectedPriority === "all" || patient.Priorité === selectedPriority
    const searchMatch =
      searchQuery === "" ||
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.owner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.motif.toLowerCase().includes(searchQuery.toLowerCase())
    return statusMatch && priorityMatch && searchMatch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleStatusChange = (patientId, newStatus) => {
    updatePatientStatus(patientId, newStatus)
  }

  return (
    <section className="p-4 max-w-7xl mx-auto">
      {paginatedData.map((patient) => (
        <div
          key={patient.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-2 bg-white rounded-lg border border-gray-200 mb-2 gap-3"
        >
          <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
            <div className="text-left w-full md:w-auto">
              <h1 className="font-semibold text-gray-800 m-0">{patient.name}</h1>
              <p className="text-gray-500 text-sm my-1">{patient.owner.name}</p>
              <p className="text-gray-500 text-sm my-1">Motif : {patient.motif}</p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap w-full md:w-auto justify-start md:justify-end md:gap-2">
            <button className="px-1 py-2 bg-teal-700 text-white text-xs rounded-md w-full md:w-[65px]">Envoyer</button>
            <button
              className={`text-white px-1 py-2 rounded-md text-xs transition-colors w-full md:w-[65px] text-center ${
                patient.Priorité === "Urgence"
                  ? "bg-red-700 hover:bg-red-700"
                  : patient.Priorité === "Moyenne"
                    ? "bg-amber-400 hover:bg-yellow-500"
                    : "bg-cyan-700 hover:bg-cyan-600"
              }`}
            >
              {patient.Priorité}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-teal-700 text-white px-3 py-2 rounded-md text-sm hover:bg-teal-600 transition-colors w-full md:w-28 text-center flex items-center justify-center">
                  {patient.status}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleStatusChange(patient.id, "En attente")}>
                  En attente
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange(patient.id, "Terminé")}>Terminé</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange(patient.id, "Annulé")}>Annulé</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 transition-colors w-full md:w-auto">
              Voir fiche
            </button>
            <button className="bg-white text-gray-700 px-1 py-2 border-2 border-gray-200 rounded-md text-sm hover:border-gray-300 transition-colors w-full md:w-auto">
              Nouveau Rendez-vous
            </button>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 px-4 max-w-full">
  <div className="w-full overflow-x-auto sm:overflow-x-visible">
    <div className="inline-flex justify-center min-w-full sm:w-auto">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  </div>
</div>
      )}
    </section>
  )
}

