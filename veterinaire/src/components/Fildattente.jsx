
export const Fildattente=()=> {
  const fakeData = [
    {
      id: 1,
      name: "Éclair",
      doctor: "Dr. James",
      waitingTime: 10,
      status: "En cours",
    },
    {
      id: 2,
      name: "Éclair",
      doctor: "Dr. Martin",
      waitingTime: 15,
      status: "En cours",
    },
    {
      id: 3,
      name: "Éclair",
      doctor: "Dr. Robert",
      waitingTime: 25,
      status: "En cours",
    },
  ]

  return (
    <section className="p-4 max-w-7xl mx-auto">
      {fakeData.map((patient) => (
        <div
          key={patient.id}
          className="flex justify-between items-center p-2 bg-white rounded-lg border border-gray-200 mb-2 flex-wrap gap-4"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="text-left">
              <h1 className="font-semibold text-gray-800 m-0">{patient.name}</h1>
              <p className="text-gray-500 text-sm my-1">{patient.doctor}</p>
              <p className="text-gray-500 text-sm my-1">Temps d'attente: {patient.waitingTime} min</p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
              {patient.status}
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
              Voir fiche
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 border-2 border-gray-200 rounded-md text-sm hover:border-gray-300 transition-colors">
              Nouveau Rendez-vous
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

