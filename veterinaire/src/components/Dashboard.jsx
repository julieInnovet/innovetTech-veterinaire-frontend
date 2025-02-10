
import {PageWithTabView} from "./PageWithTabView.jsx"
import {QuickActions} from "./QuickActions"

export const Dashboard = () => {
  return (
    <div className="font-['Segoe UI',Tahoma,Geneva,sans-serif] overflow-hidden">
      <div className="flex flex-wrap justify-center gap-5 p-2">
        <div className="flex flex-wrap justify-center items-center gap-5 mt-4 sm:justify-center">
          {[
            { title: "Nombre de rendez-vous à planifier", number: "05", note: "+20% par rapport au mois dernier" },
            { title: "Rendez-vous Aujourd'hui", number: "12", note: "3 de plus qu'hier" },
            { title: "Nombre de dossiers incomplets", number: "42", note: "Cette semaine" },
            { title: "Revenus du Mois", number: "15,234€", note: "+10% par rapport au mois dernier" },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#5ea4a0] text-white rounded-2xl p-3 text-center w-[265px] shadow-lg h-[150px] flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-sm font-medium">{card.title}</h3>
                <p className="text-2xl font-bold">{card.number}</p>
                <p className="text-sm text-[#dfeffd]">{card.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold mb-5 text-start">Gestion des Patients et Rendez-vous</h1>
          <PageWithTabView />
        </div>

        <QuickActions />

        <div className="w-full">
          <h2 className="text-2xl font-bold text-black mb-5">Suivi des Opérations Cliniques</h2>
          <div className="bg-white rounded-3xl border border-[#cecece] p-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
              {[
                { title: "Taux d'occupation", value: "85%", change: "+5% vs mois dernier" },
                { title: "Temps moyen de consultation", value: "45 min", change: "-2 min vs mois dernier" },
                { title: "Satisfaction client", value: "4.8/5", change: "Basé sur 150 avis" },
                { title: "Taux de retour", value: "12%", change: "-2% vs mois dernier" },
              ].map((op, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-left">
                  <p className="text-2xl font-bold text-[#307e76] mt-2">{op.title}</p>
                  <p className="text-2xl font-bold text-black my-2">{op.value}</p>
                  <p className="text-sm text-[#307e76] mb-2">{op.change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


