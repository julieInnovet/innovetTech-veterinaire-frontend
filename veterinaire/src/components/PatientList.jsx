/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Save } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Sample data - replace with your actual data
const allPatients = Array(50)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Étoile ${i + 1}`,
    species: "Cheval",
    lastVisit: "2024-09-15",
  }))

const ITEMS_PER_PAGE = 16


export const PatientsList=()=> {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPatients, setFilteredPatients] = useState(allPatients)
  const [editingPatient, setEditingPatient] = useState(null)
  const [isAddingPatient, setIsAddingPatient] = useState(false)
  const [newPatient, setNewPatient] = useState({ name: "", species: "" })

  const handleDeletePatient = useCallback((patientId) => {
    setFilteredPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== patientId))
  }, [])

  const handleEditPatient = useCallback((patient) => {
    setEditingPatient(patient)
  }, [])

  const handleSavePatient = useCallback((updatedPatient) => {
    setFilteredPatients((prevPatients) => prevPatients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p)))
    setEditingPatient(null)
  }, [])

  const handleAddPatient = () => {
    const newPatientWithId = {
      ...newPatient,
      id: Date.now(),
      lastVisit: new Date().toISOString().split("T")[0],
    }
    setFilteredPatients((prev) => [newPatientWithId, ...prev])
    setNewPatient({ name: "", species: "" })
    setIsAddingPatient(false)
    setCurrentPage(1) // Reset to the first page to show the new patient
  }

  // Calculate pagination
  const displayedPatients = useMemo(() => {
    return filteredPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.species.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [filteredPatients, searchQuery])

  const totalPages = Math.ceil(displayedPatients.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPatients = displayedPatients.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Generate page numbers for pagination
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  useEffect(() => {
    const filtered = allPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.species.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredPatients(filtered)
    setCurrentPage(1)
  }, [searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0f766e] mb-6">Patients</h1>

        <div className="flex items-center justify-end gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="chevaux-exclu" className="text-sm font-bold text-gray-600">
              chevaux exclu
            </label>
            <input
              type="checkbox"
              id="chevaux-exclu"
              className="h-4 w-4 rounded border-gray-300 text-[#4A8B94] focus:ring-[#4A8B94]"
            />
          </div>
          <Button
            className="bg-[#0f766e] hover:bg-teal-600 text-white px-3 py-1.5 rounded-md shadow-md text-xs"
            onClick={() => setIsAddingPatient(true)}
          >
            Ajouter un nouveau patients
          </Button>
          <div className="relative w-48">
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

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-bold">Nom patient</TableHead>
              <TableHead className="hidden lg:table-cell text-xs font-bold">Nom propriétaire</TableHead>
              <TableHead className="hidden xl:table-cell text-xs font-bold">Dernière consultation</TableHead>
              <TableHead className="hidden md:table-cell text-xs font-bold">Dernière visite</TableHead>
              <TableHead className="hidden sm:table-cell text-xs font-bold">Espèce</TableHead>
              <TableHead className="hidden xl:table-cell text-xs font-bold">Véto responsable la dernière consultation</TableHead>
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
                    patient.name
                  )}
                </TableCell>
                <TableCell className="hidden lg:table-cell">John Doe</TableCell>
                <TableCell className="hidden xl:table-cell">{patient.lastVisit}</TableCell>
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
                <TableCell className="hidden xl:table-cell">Dr. Smith</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
                      Voir la fiche patient
                    </Button>
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
            <Button className="bg-teal-700 hover:bg-teal-600" onClick={handleAddPatient}>Ajouter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

