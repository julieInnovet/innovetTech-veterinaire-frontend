import { useState } from "react"
import { TabView, TabPanel } from "primereact/tabview"
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import {Fildattente} from "./Fildattente"
import {Calendar} from "./Calendar"
import {Vuegantt} from "./Vuegantt"
import {DailySchedule} from "./Daily-schedule"
export const FileDattenteDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-[1189px] mx-auto">
      <div className="bg-white border border-[#cecece] rounded-lg overflow-hidden">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className="[&_.p-tabview-panels]:!p-0"
        >
          <TabPanel header="File d'attente" className="text-gray-500 hover:text-black focus:text-black">
            <Fildattente />
          </TabPanel>
          <TabPanel header="Agenda" className="text-gray-500 hover:text-black focus:text-black">
            <Calendar />
          </TabPanel>
          <TabPanel header="Vue Gantt" className="text-gray-500 hover:text-black focus:text-black">
            <Vuegantt />
          </TabPanel>

          <TabPanel header="Card" className="text-gray-500 hover:text-black focus:text-black">
            <DailySchedule />
          </TabPanel>
        </TabView>

        
      </div>
    </div>
  )
}


