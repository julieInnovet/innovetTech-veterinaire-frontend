import { useState } from 'react'; // Ajout de useState à l'importation
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/themes/saga-blue/theme.css'; // Thème PrimeReact
import 'primereact/resources/primereact.min.css'; // Styles généraux PrimeReact
import 'primeicons/primeicons.css'; // Icônes PrimeIcons
import './PageWithTabView.css'; // Fichier CSS personnalisé
import Fildattente from "./Fildattente";
import Calendar from "./calander"; 
import Vuegantt from './Vuegantt';

const PageWithTabView = () => {
    const [activeIndex, setActiveIndex] = useState(0); // useState correctement utilisé

    return (
        <div className="page-container">
            {/* <h1>Bienvenue sur la page avec des onglets</h1> */}
            <div className="card">
                <TabView
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                >
                    <TabPanel header="File d’attente ">
                        <Fildattente />
                    </TabPanel>
                    <TabPanel header="Agenda">
                         <Calendar />
                    </TabPanel>
                    <TabPanel header="Vue Gantt ">
                       <Vuegantt />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    );
};

export default PageWithTabView;
