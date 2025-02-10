

import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarPlus, FileText, History, AlertCircle, Stethoscope, Syringe, Upload } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { usePatientContext } from "../PatientContext"

export const PatientDetails = () => {
  const { id } = useParams()
  const { patients, updatePatientStatus } = usePatientContext()
  const patient = patients.find((p) => p.id === Number.parseInt(id))

  const [expandedDate, setExpandedDate] = useState(null)

  if (!patient) {
    return <div>Patient not found</div>
  }

  const toggleMedicalDetails = (date) => {
    setExpandedDate(date)
  }

  return (
    <div className="container mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f766e]">Fiche Patient</h1>
        <Link to="/patient" className="w-full sm:w-auto">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm w-full">
            Retour à la liste
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Patient Info - Left Column */}
        <div className="bg-white rounded-lg border p-3 sm:p-4 md:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Avatar className="h-12 w-12 sm:h-16 sm:w-16 bg-gray-100">
              <AvatarFallback className="text-gray-500">Ét</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-1">{patient.name}</h2>
              <p className="text-gray-600 text-sm mb-4">Cheval - Shetland</p>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-sm mb-4 max-w-[15vw]">
                <div>
                  <span className="text-black font-bold">Age :</span> <span>3 ans</span>
                </div>
                <div>
                  <span className="text-black font-bold">Sexe :</span> <span>Femelle</span>
                </div>
                <div>
                  <span className="text-black font-bold">Poids :</span> <span>220 kg</span>
                </div>
                <div>
                  <span className="text-black font-bold">Robe :</span> <span>Bai</span>
                </div>
              </div>

              <div className="text-sm">
                <p className="text-gray-600">Propriétaire :</p>
                <p className="mt-1 text-black font-medium">Dernière visite : {patient.lastVisit}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Info - Right Column */}
        <div className="bg-white rounded-lg border p-3 sm:p-4 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-medium">Informations du/des Propriétaire(s)</h3>
            <Badge
              className={`rounded px-3 hover:bg-opacity-80 ${
                patient.status === "Terminé"
                  ? "bg-green-500"
                  : patient.status === "En attente"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            >
              {patient.status}
            </Badge>
          </div>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-[auto_1fr] gap-x-2">
              <span className="text-black font-bold">Nom :</span>
              <span>{patient.owner.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-[auto_1fr] gap-x-2">
              <span className="text-black font-bold">Email :</span>
              <span className="break-all">{patient.owner.email}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-[auto_1fr] gap-x-2">
              <span className="text-black font-bold">Téléphone :</span>
              <span>{patient.owner.phone}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-[auto_1fr] gap-x-2">
              <span className="text-black font-bold">Adresse :</span>
              <span>{patient.owner.address}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr] 2xl:grid-cols-[auto_1fr] gap-x-2">
              <span className="text-black font-bold">Adresse de l'écurie :</span>
              <span>{patient.owner.stableAddress}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Detailed Information - Left Side */}
        <div className="xl:col-span-2">
          <Card>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4">Informations Détaillées</h3>
              <Tabs defaultValue="medical" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-[70px] md:h-[40px]">
                  <TabsTrigger value="medical" className="text-xs sm:text-sm ">
                    Historique Médical
                  </TabsTrigger>
                  <TabsTrigger value="ordonnance" className="text-xs sm:text-sm">
                    Ordonnance
                  </TabsTrigger>
                  <TabsTrigger value="vaccinations" className="text-xs sm:text-sm">
                    Vaccinations
                  </TabsTrigger>
                  <TabsTrigger value="diagnostics" className="text-xs sm:text-sm">
                    Documents
                  </TabsTrigger>
                </TabsList>
                <div className="mt-4 border rounded-lg overflow-hidden h-[400px] flex flex-col">
                  <TabsContent value="medical" className="flex-1 overflow-hidden m-0">
                    <div className="h-full overflow-y-auto p-4 space-y-4 custom-scrollbar">
                      {patient.status === "Terminé" && (
                        <div className="">
                          <div className="grid grid-cols-[1fr_1fr] gap-4">
                            <div className="border rounded-lg p-4 ">
                              <button
                                onClick={() => toggleMedicalDetails(patient.lastConsultation)}
                                className="text-left w-full"
                              >
                                <h4 className="text-base font-semibold">{patient.lastConsultation}</h4>

                                <p className="text-sm text-gray-600">{patient.motif}</p>
                              </button>
                            </div>
                            {expandedDate === patient.lastConsultation && (
                              <div className="border rounded-lg p-4 ">
                                <div className="flex flex-col space-y-4">
                                  <Link
                                    to={`/consultation/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300 rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Radio </span>
                                  </Link>
                                  <Link
                                    to={`/prescription/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300  rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Echo</span>
                                  </Link>
                                  <Link
                                    to={`/prescription/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300  rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Endoscopie</span>
                                  </Link>
                                  <Link
                                    to={`/prescription/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300  rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Facture</span>
                                  </Link>
                                  <Link
                                    to={`/prescription/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300  rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Photo </span>
                                  </Link>
                                  <Link
                                    to={`/prescription/${patient.id}`}
                                    className="flex items-center p-2 font-medium border border-gray-300  rounded"
                                  >
                                    <FileText size={24} className="mr-2" />
                                    <span className="text-sm">Ordonnance</span>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="ordonnance" className="flex-1 overflow-hidden m-0">
                    <div className="h-full flex items-center justify-center text-gray-500">
                      Aucune ordonnance disponible
                    </div>
                  </TabsContent>
                  <TabsContent value="vaccinations" className="flex-1 overflow-hidden m-0">
                    <div className="h-full overflow-y-auto p-4 space-y-4 custom-scrollbar">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                        <span className="font-bold text-[18px]">Vaccinations</span>
                        <div className="w-full sm:w-auto">
                          <button className="flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0c5a54] px-3 py-2 rounded-md text-white gap-2 transition-colors">
                            <Syringe size={20} />
                            <span className="text-sm">Nouvelle vaccination</span>
                          </button>
                        </div>
                      </div>

                      {/* Vaccination List */}
                      <div className="bg-white rounded-lg border p-4">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-base font-semibold">Grippe équine</h4>
                              <p className="text-sm text-gray-600">Administré le 15/01/2024</p>
                              <p className="text-sm text-gray-600">Prochain rappel : 15/07/2024</p>
                            </div>
                            <div>
                              <button className="hidden bg-[#DCFCE7] px-2 py-1 rounded-full text-green-800 text-xs font-medium md:block">
                                À jour
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="diagnostics" className="flex-1 overflow-hidden m-0">
                    <div className="h-full overflow-y-auto p-4 space-y-4 custom-scrollbar">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <span className="font-bold text-[18px]">Documents</span>
                        <div className="w-full sm:w-auto">
                          <button className="flex items-center justify-center w-full sm:w-auto bg-[#0F766E] hover:bg-[#0c5a54] px-3 py-2 rounded-md text-white gap-2 transition-colors">
                            <Upload size={20} />
                            <span className="text-sm">Ajouter un document</span>
                          </button>
                        </div>
                      </div>

                      {/* Documents List */}
                      <div className="bg-white rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                          <div className="flex flex-col space-y-4 border border-gray-200 solid rounded-md px-3 py-2">
                            <div className="flex items-center">
                              <h4 className="text-base font-semibold">15/02/2024</h4>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex items-center justify-between gap-2">
                                  <p className="font-medium text-sm text-black line-clamp-2">
                                    Radiographie - Membre antérieur
                                  </p>
                                  <FileText size={20} className="flex-shrink-0" />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Ajouté le 15/02/2024</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - Right Side */}
        <Card className="xl:h-fit">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-4">Actions Rapides</h3>
            <div className="space-y-2 sm:space-y-3">
              <Button variant="outline" className="w-full justify-start py-2 px-3 h-auto" size="sm">
                <CalendarPlus className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Planifier un rendez-vous</span>
              </Button>
              <Button variant="outline" className="w-full justify-start py-2 px-3 h-auto" size="sm">
                <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Créer une ordonnance</span>
              </Button>
              <Button variant="outline" className="w-full justify-start py-2 px-3 h-auto" size="sm">
                <Stethoscope className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Nouvelle consultation</span>
              </Button>
              <Button variant="outline" className="w-full justify-start py-2 px-3 h-auto" size="sm">
                <History className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Historique des traitements</span>
              </Button>
              <Button variant="outline" className="w-full justify-start py-2 px-3 h-auto" size="sm">
                <AlertCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Signaler un problème</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fff;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: grey;
        }
      `}</style>
    </div>
  )
}

