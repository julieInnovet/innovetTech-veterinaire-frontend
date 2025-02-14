import { useParams, Link } from "react-router-dom"
import { usePatientContext } from "../PatientContext"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const PatientFile = () => {
  const { id } = useParams()
  const { patients } = usePatientContext()
  // console.log(patients,"dfdf");
  
  const patient = patients.find((p) => p.id === Number.parseInt(id))

  if (!patient) {
    return <div>Patient not found</div>
  }

  return (

    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold mb-4 text-teal-700">Fiche Patient</h1>
      <Link to="/propriétaires">
        <Button className="mt-4 bg-white hover:bg-gray-50 text-black border border-gray-300 ">Retour à la liste</Button>
      </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Propriétaire</TableHead>
            <TableHead>Adresse du propriétaire</TableHead>
            <TableHead>Facture</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.owner.name}</TableCell>
            <TableCell>
              {patient.owner.address.street}, {patient.owner.address.postalCode} {patient.owner.address.city},{" "}
              {patient.owner.address.country}
            </TableCell>
            <TableCell>
              {/* Assuming there's no facture information in the current data structure */}
              <Button variant="outline">Générer la facture</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
 
    </div>
  )
}

