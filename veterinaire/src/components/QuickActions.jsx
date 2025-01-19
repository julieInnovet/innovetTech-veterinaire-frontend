import "./QuickAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faCalendarAlt,
  faFilePrescription,
  faChartLine,
  faSyringe,
  faMicroscope,
  faCreditCard,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const QuickActions = () => {
  const actions = [
    { icon: faStethoscope, label: "Nouvelle Consultation" },
    { icon: faCalendarAlt, label: "Planifier Rendez-vous" },
    { icon: faFilePrescription, label: "Créer Ordonnance" },
    { icon: faChartLine, label: "Examen Clinique" },
    { icon: faSyringe, label: "Vaccination" },
    { icon: faMicroscope, label: "Analyses Labo" },
    { icon: faCreditCard, label: "Facturation" },
    { icon: faUserPlus, label: "Nouveau Patient" },
  ];

  return (
    <>
      <h2 className="quick-actions-title">Actions Rapides</h2>
    <div className="quick-actions-wrapper">
      <div>

      </div>
      <div className="quick-actions-container">
        {actions.map((action, index) => (
          <div key={index} className="quick-action-card">
            <div className="quick-action-icon">
              <FontAwesomeIcon icon={action.icon} className="icon" />
            </div>
            <p className="quick-action-label">{action.label}</p>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default QuickActions;