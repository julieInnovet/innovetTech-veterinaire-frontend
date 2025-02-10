

import { useState, useMemo, useCallback, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table"
import { Edit, Trash2, Save } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { usePatientContext } from "../PatientContext"

const ITEMS_PER_PAGE = 8

export const PatientsList = () => {
  const navigate = useNavigate()
  const { patients, updatePatientStatus } = usePatientContext()

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPatients, setFilteredPatients] = useState(patients)
  const [editingPatient, setEditingPatient] = useState(null)
  const [isAddingPatient, setIsAddingPatient] = useState(false)
  const [newPatient, setNewPatient] = useState({ name: "", species: "" })

  const handleDeletePatient = useCallback((patientId) => {
    setFilteredPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== patientId))
  }, [])

  const handleEditPatient = useCallback((patient) => {
    setEditingPatient(patient)
  }, [])

  const handleSavePatient = useCallback(
    (updatedPatient) => {
      setFilteredPatients((prevPatients) =>
        prevPatients.map((p) => (p.id === updatedPatient.id ? { ...p, ...updatedPatient } : p)),
      )
      updatePatientStatus(updatedPatient.id, updatedPatient.status)
      setEditingPatient(null)
    },
    [updatePatientStatus],
  )

  const handleAddPatient = () => {
    const newPatientWithId = {
      ...newPatient,
      id: Date.now(),
      owner: "Nouveau Propriétaire",
      lastConsultation: new Date().toISOString().split("T")[0],
      lastVisit: new Date().toISOString().split("T")[0],
      responsibleVet: "Dr. Nouveau",
      status: "En attente",
    }
    setFilteredPatients((prev) => [newPatientWithId, ...prev])
    setNewPatient({ name: "", species: "" })
    setIsAddingPatient(false)
    setCurrentPage(1)
  }

  const displayedPatients = useMemo(() => {
    return filteredPatients
  }, [filteredPatients])

  const totalPages = Math.ceil(displayedPatients.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPatients = displayedPatients.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  useEffect(() => {
    const filtered = patients.filter((patient) => {
      const searchableFields = [
        patient.name,
        patient.owner.name,
        patient.lastConsultation,
        patient.lastVisit,
        patient.species,
        patient.responsibleVet,
      ]
      return searchableFields.some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
    })
    setFilteredPatients(filtered)
    setCurrentPage(1)
  }, [searchQuery, patients])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0f766e] mb-4 sm:mb-6">Patients</h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 mb-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="chevaux-exclu" className="text-sm font-bold text-gray-600 whitespace-nowrap">
              chevaux exclu
            </label>
            <input
              type="checkbox"
              id="chevaux-exclu"
              className="h-4 w-4 rounded border-gray-300 text-[#4A8B94] focus:ring-[#4A8B94]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button
              className="bg-[#0f766e] hover:bg-teal-600 text-white px-3 py-1.5 rounded-md shadow-md text-xs w-full sm:w-auto"
              onClick={() => setIsAddingPatient(true)}
            >
              Ajouter un nouveau patient
            </Button>
            <div className="relative w-full sm:w-48">
              <Input
                placeholder="Recherche"
                className="w-full bg-gray-50 border-gray-200"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-bold">Nom patient</TableHead>
              <TableHead className="hidden lg:table-cell text-xs font-bold">Nom propriétaire</TableHead>
              <TableHead className="hidden xl:table-cell text-xs font-bold">Dernière consultation</TableHead>
              <TableHead className="hidden md:table-cell text-xs font-bold">Dernière visite</TableHead>
              <TableHead className="hidden sm:table-cell text-xs font-bold">Espèce</TableHead>
              <TableHead className="hidden xl:table-cell text-xs font-bold">
                Véto responsable la dernière consultation
              </TableHead>
              <TableHead className="text-right text-xs font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">
                  {editingPatient?.id === patient.id ? (
                    <Input
                      value={editingPatient.name}
                      onChange={(e) => setEditingPatient({ ...editingPatient, name: e.target.value })}
                    />
                  ) : (
                    <button
                      className="sm:cursor-default focus:outline-none"
                      onClick={() => {
                        if (window.innerWidth < 640) {
                          navigate(`/patient/${patient.id}`)
                        }
                      }}
                    >
                      {patient.name}
                    </button>
                  )}
                </TableCell>
                <TableCell className="hidden lg:table-cell">{patient.owner.name}</TableCell>
                <TableCell className="hidden xl:table-cell">{patient.lastConsultation}</TableCell>
                <TableCell className="hidden md:table-cell">{patient.lastVisit}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {editingPatient?.id === patient.id ? (
                    <Input
                      value={editingPatient.species}
                      onChange={(e) => setEditingPatient({ ...editingPatient, species: e.target.value })}
                    />
                  ) : (
                    patient.species
                  )}
                </TableCell>
                <TableCell className="hidden xl:table-cell">{patient.responsibleVet}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/patient/${patient.id}`}>
                      <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
                        Voir la fiche patient
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDeletePatient(patient.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {editingPatient?.id === patient.id ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleSavePatient(editingPatient)}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEditPatient(patient)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="flex">
          <Button
            variant="outline"
            className="px-4 h-10 border-[#e5e7eb] text-gray-600 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </Button>
          {[1, 2].map((number) => (
            <Button
              key={number}
              variant="outline"
              className={`px-4 h-10 border-[#e5e7eb] ${
                currentPage === number ? "bg-[#0f766e] text-white hover:bg-teal-600" : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Button>
          ))}
          <Button
            variant="outline"
            className="px-4 h-10 border-[#e5e7eb] text-gray-600 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 2}
          >
            Suivant
          </Button>
        </div>
      </div>
      <Dialog open={isAddingPatient} onOpenChange={setIsAddingPatient}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-teal-700">Ajouter un nouveau patient</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right  text-gray-600">
                Nom
              </Label>
              <Input
                id="name"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="species" className="text-right text-gray-600">
                Espèce
              </Label>
              <Input
                id="species"
                value={newPatient.species}
                onChange={(e) => setNewPatient({ ...newPatient, species: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-teal-700 hover:bg-teal-600" onClick={handleAddPatient}>
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

