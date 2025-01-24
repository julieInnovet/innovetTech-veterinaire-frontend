
import { MapPin, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
const appointments = [
  {
    id: 1,
    time: "09:00",
    name: "Jean Dupont",
    type: "Spirit",
    description: "Examen annuel",
    address: "123 Rue des Écuries, Paris",
  },
  {
    id: 2,
    time: "10:30",
    name: "Marie Martin",
    type: "Luna",
    description: "Contrôle",
    address: "456 Avenue des Chevaux, Paris",
  },
]

export const DailySchedule=()=> {
  return (


    <div className="container mx-auto p-4 space-y-1">
      {/* Header */}
      {/* <div className="flex justify-between items-center"> */}
      <div className="flex flex-col sm:flex-row justify-between items-center">


        <h1 className="text-2xl font-semibold mb-2">Tournée du jour</h1>
        <Button className="bg-teal-700 hover:bg-teal-600 mb-2">
          <Settings className="mr-2 h-4 w-4" />
          Optimisation de tournée
        </Button>
      </div>
        
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Appointments List */}
        <div className="space-y-6">
          {" "}
          {/* Increased space between cards */}
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="relative overflow-hidden">
              <CardContent className="p-2 pl-16">
                {" "}
                {/* Increased left padding */}
                {/* Number Circle - Moved slightly down */}
                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-[#E8F5F2] flex items-center justify-center text-[#7DCFB6] font-medium">
                  {appointment.id}
                </div>
                <div className="space-y-2">
                  {/* Time and Name */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold">{appointment.time}</span>
                    <span className="text-lg">- {appointment.name}</span>
                  </div>

                  {/* Type and Description */}
                  <div className="text-muted-foreground">
                    {appointment.type} - {appointment.description}
                  </div>

                  {/* Address */}
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 shrink-0" />
                    <span>{appointment.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <Card className="h-[600px] lg:h-auto">
          <CardContent className="p-0 h-full">
            <div className="w-full h-full bg-muted/10 flex items-center justify-center text-muted-foreground">
              Carte en cours de chargement...
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

