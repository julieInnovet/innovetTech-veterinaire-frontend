import "./Filldattente.css";

function Filledattente() {
  const fakeData = [
    {
      id: 1,
      name: "Éclair",
      doctor: "Dr. James",
      waitingTime: 10,
      status: "En cours"
    },
    {
      id: 2,
      name: "Éclair",
      doctor: "Dr. Martin",
      waitingTime: 15,
      status: "En cours"
    },
    {
      id: 3,
      name: "Éclair",
      doctor: "Dr. Robert",
      waitingTime: 25,
      status: "En cours"
    }
  ];

  return (
    <section className="waiting-section">
      {fakeData.map((patient) => (
        <div key={patient.id} className="waiting-container">
          <div className="waiting-text">
            {/* <div className="avatar">{patient.name.slice(0, 2)}</div> */}
            <div className="info">
              <h1>{patient.name}</h1>
              <p>{patient.doctor}</p>
              <p>Temps dattente: {patient.waitingTime} min</p>
            </div>
          </div>
          <div className="waiting-btns">
            <button className="btn-primary">{patient.status}</button>
            <button className="btn-primary">Voir fiche</button>
            <button className="btn-outline">Nouveau Rendez-vous</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Filledattente;
