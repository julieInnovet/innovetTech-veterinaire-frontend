import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStethoscope,
  faCalendarAlt,
  faFilePrescription,
  faChartLine,
  faSyringe,
  faMicroscope,
  faCreditCard,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons"

export const QuickActions = () => {
  const actions = [
    { icon: faStethoscope, label: "Nouvelle Consultation" },
    { icon: faCalendarAlt, label: "Planifier Rendez-vous" },
    { icon: faFilePrescription, label: "Créer Ordonnance" },
    { icon: faChartLine, label: "Examen Clinique" },
    { icon: faSyringe, label: "Vaccination" },
    { icon: faMicroscope, label: "Analyses Labo" },
    { icon: faCreditCard, label: "Facturation" },
    { icon: faUserPlus, label: "Nouveau Patient" },
  ]

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <h2 className="text-2xl font-bold text-black mb-5 text-left w-full">Actions Rapides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-white rounded-3xl shadow-md border border-[#cecece] w-full">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-[#cecece] cursor-pointer transition-colors duration-300 hover:bg-[#307e76] group"
          >
            <div className="text-4xl mt-2 text-black group-hover:text-white transition-colors duration-300">
              <FontAwesomeIcon icon={action.icon} />
            </div>
            <p className="text-base font-bold text-center text-black group-hover:text-white transition-colors duration-300 mt-2">
              {action.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


