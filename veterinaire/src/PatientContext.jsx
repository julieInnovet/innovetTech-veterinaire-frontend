import { createContext, useState, useContext } from "react";
import { allPatients } from "./data";

const PatientContext = createContext(undefined);

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(allPatients);

  const updatePatientStatus = (id, status) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, status } : patient
      )
    );
  };

  return (
    <PatientContext.Provider value={{ patients, updatePatientStatus }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("usePatientContext must be used within a PatientProvider");
  }
  return context;
};
