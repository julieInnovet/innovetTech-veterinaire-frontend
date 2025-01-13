




import DefaultLayout from "../layout/DefaultLayout.jsx";
import "./Dashbord.css"; 
import PageWithTabView from "./PageWithTabView.jsx";
import QuickActions from "./QuickActions";
// import Sidebar from "./sidebar.jsx";

const Dashboard = () => {
  return (


      <>


  <div className="side">
    <DefaultLayout/>
  </div>


    <div className="dashboard-container">
<div className="card-container">
<div className="dashboard-card">
  <div className="text">
  <h3>Nombre de rendez-vous à planifier</h3>
        <p className="dashboard-number">05</p>
        <p className="dashboard-note">+20% par rapport au mois dernier</p>
  </div>

      </div>
      <div className="dashboard-card">
        <div className="text">
        <h3>Rendez-vous Aujourd&#39;hui</h3>
        <p className="dashboard-number">12</p>
        <p className="dashboard-note">3 de plus qu&#39;hier</p>

        </div>
      </div>
      <div className="dashboard-card">
        <div className="text">
        <h3>Nombre de dossiers incomplets</h3>
        <p className="dashboard-number">42</p>
        <p className="dashboard-note">Cette semaine</p>

        </div>
      </div>
      <div className="dashboard-card">
        <div className="text">
        <h3>Revenus du Mois</h3>
        <p className="dashboard-number">15,234€</p>
        <p className="dashboard-note">+10% par rapport au mois dernier</p>

        </div>
      </div>
</div>

      <div>
        <h1 className="title">Gestion des Patients et Rendez-vous</h1>
        <PageWithTabView />
      </div>

      <QuickActions />
      



      {/* Section Suivi des Opérations Cliniques */}
      <h2 className="operations-title">Suivi des Opérations Cliniques</h2>
      <div className="operations-container">
        <div className="operations-grid">
          <div className="operation-card">
            <p className="operation-title">Taux d&#39;occupation</p>
            <p className="operation-value">85%</p>
            <p className="operation-change">+5% vs mois dernier</p>
          </div>
          <div className="operation-card">
            <p className="operation-title">Temps moyen de consultation</p>
            <p className="operation-value">45 min</p>
            <p className="operation-change">-2 min vs mois dernier</p>
          </div>
          <div className="operation-card">
            <p className="operation-title">Satisfaction client</p>
            <p className="operation-value">4.8/5</p>
            <p className="operation-change">Basé sur 150 avis</p>
          </div>
          <div className="operation-card">
            <p className="operation-title">Taux de retour</p>
            <p className="operation-value">12%</p>
            <p className="operation-change">-2% vs mois dernier</p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
