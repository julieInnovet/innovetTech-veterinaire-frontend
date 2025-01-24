import { useState, useEffect } from "react"

export const Vuegantt=()=> {
  const days = [
    { short: "lun 20", full: "Lundi 20" },
    { short: "mar 21", full: "Mardi 21" },
    { short: "mer 22", full: "Mercredi 22" },
    { short: "jeu 23", full: "Jeudi 23" },
    { short: "ven 24", full: "Vendredi 24" },
    { short: "sam 25", full: "Samedi 25" },
    { short: "dim 26", full: "Dimanche 26" },
  ]

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Dupont",
      type: "Consultation",
      location: "Étoile",
      startDay: 1,
      duration: 2,
      time: "9:00 - 10:30",
    },
    {
      id: 2,
      doctor: "Dr. Martin",
      type: "Vaccination",
      location: "Orage",
      startDay: 4,
      duration: 2,
      time: "10:00 - 11:00",
    },
  ]

  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 980)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 980)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="w-full font-sans">
        <h2 className="text-xl font-medium text-left px-5 pt-1 capitalize">Planning des rendez-vous</h2>

        <div className="bg-white rounded-2xl p-8 w-full box-border overflow-x-scroll">
          {/* Days Header */}
          <div className="grid grid-cols-7 mb-8 px-4">
            {days.map((day, index) => (
              <div key={index} className="text-center text-gray-600 text-sm relative">
                <span className="relative z-10">{day.short}</span>
              </div>
            ))}
          </div>

          {/* Appointments Section */}
          <div className="flex flex-col gap-8">
            {["Dr. Dupont", "Dr. Martin"].map((doctor) => (
              <div
                key={doctor}
                className="flex items-start relative pb-8 last:pb-0 last:after:hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:border-b after:border-dashed after:border-gray-200"
              >
                <div className="w-28 text-sm text-gray-700 font-medium">{doctor}</div>
                <div className="flex-1 relative min-h-14">
                  {appointments
                    .filter((apt) => apt.doctor === doctor)
                    .map((appointment) => (
                      <button
                        key={appointment.id}
                        className={`absolute h-14 rounded-full bg-teal-600 hover:bg-teal-700 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md ${
                          selectedAppointment?.id === appointment.id ? "bg-teal-700" : ""
                        }`}
                        style={{
                          left: `${(appointment.startDay - 1) * (100 / 50)}%`, 
                          width: isSmallScreen ? "155px" : `${appointment.duration * (100 / 7)}%`,
                        }}
                        onClick={() => setSelectedAppointment(appointment)}
                        onMouseLeave={() => setSelectedAppointment(null)}
                      >
                        <div className="h-full w-full px-4 py-2 text-white flex flex-col justify-center text-center">
                          <div className="text-sm font-medium truncate">
                            {appointment.type} - {appointment.location}
                          </div>
                          <div className="text-xs opacity-90">{appointment.time}</div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

