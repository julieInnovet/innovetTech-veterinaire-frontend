"use client"

import { useState, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { usePatientContext } from "../PatientContext"

import { Search, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AddClientDialog } from "@/components/add-client-dialog"
import { CustomRadioGroup } from "@/components/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export const Propriétaires = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const { patients, setPatients } = usePatientContext()
  const [editingClient, setEditingClient] = useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const handleAddClient = (newClient) => {
    const clientWithId = {
      ...newClient,
      id: `CA${Math.floor(Math.random() * 10000)}H${Math.floor(Math.random() * 10)}`,
      lastConsultation: newClient.lastConsultation || new Date().toISOString().split("T")[0],
    }
    setPatients((prevPatients) => [clientWithId, ...prevPatients])
  }

  const handleEdit = useCallback((client) => {
    setEditingClient({
      ...client,
      lastConsultation: client.lastConsultation || new Date().toISOString().split("T")[0],
    })
    setIsEditDialogOpen(true)
  }, [])

  const handleDelete = useCallback(
    (id) => {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
        setPatients((prevPatients) => prevPatients.filter((client) => client.id !== id))
      }
    },
    [setPatients],
  )

  const handleUpdateClient = useCallback(
    (updatedClient) => {
      const formattedClient = {
        ...updatedClient,
        lastConsultation: new Date(updatedClient.lastConsultation).toISOString().split("T")[0],
      }
      setPatients((prevPatients) =>
        prevPatients.map((client) => (client.id === formattedClient.id ? formattedClient : client)),
      )
      setIsEditDialogOpen(false)
    },
    [setPatients],
  )

  const filteredData = useMemo(() => {
    return patients.filter((client) => {
      const searchLower = searchQuery.toLowerCase()
      return (
        client.owner.name.toLowerCase().includes(searchLower) ||
        client.owner.address.city.toLowerCase().includes(searchLower) ||
        client.lastConsultation.includes(searchLower)
      )
    })
  }, [patients, searchQuery])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredData, currentPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleViewPatientFile = (patientId) => {
    navigate(`/patientDetail/${patientId}`)
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-primary mb-6 text-teal-700 ">Propriétaires</h1>

      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-start justify-end 2xl:justify-end">
    <div className="flex gap-8 items-start">
      <CustomRadioGroup title="Chez huissier" name="huissier" />
      <CustomRadioGroup title="Client a relancer" name="relancer" />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
      <AddClientDialog onAddClient={handleAddClient} />
      <div className="relative w-full sm:w-64 2xl:w-[170px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher"
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Numéro</TableHead>
              <TableHead className="font-bold">Nom</TableHead>
              <TableHead className="font-bold">Ville</TableHead>
              <TableHead className="font-bold">Pays</TableHead>
              <TableHead className="font-bold">Dernière consultation</TableHead>
              <TableHead className="font-bold w-[180px]"></TableHead>
              <TableHead className="font-bold ">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.owner.name}</TableCell>
                <TableCell>{patient.owner.address.city}</TableCell>
                <TableCell>{patient.owner.address.country}</TableCell>
                <TableCell className="w-[180px]">{patient.lastConsultation}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewPatientFile(patient.id)}>
                      Voir la fiche patient
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="px-1">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(patient)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(patient.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "bg-teal-600 text-white hover:bg-teal-700" : ""}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </Button>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le client</DialogTitle>
          </DialogHeader>
          {editingClient && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleUpdateClient(editingClient)
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    value={editingClient.owner.name}
                    onChange={(e) =>
                      setEditingClient({ ...editingClient, owner: { ...editingClient.owner, name: e.target.value } })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="city" className="text-right">
                    Ville
                  </Label>
                  <Input
                    id="city"
                    value={editingClient.owner.address.city}
                    onChange={(e) =>
                      setEditingClient({
                        ...editingClient,
                        owner: {
                          ...editingClient.owner,
                          address: { ...editingClient.owner.address, city: e.target.value },
                        },
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="country" className="text-right">
                    Pays
                  </Label>
                  <Input
                    id="country"
                    value={editingClient.owner.address.country}
                    onChange={(e) =>
                      setEditingClient({
                        ...editingClient,
                        owner: {
                          ...editingClient.owner,
                          address: { ...editingClient.owner.address, country: e.target.value },
                        },
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lastConsultation" className="text-right">
                    Dernière consultation
                  </Label>
                  <Input
                    id="lastConsultation"
                    type="date"
                    value={editingClient.lastConsultation}
                    onChange={(e) => setEditingClient({ ...editingClient, lastConsultation: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-teal-700">
                  Envoyer
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

