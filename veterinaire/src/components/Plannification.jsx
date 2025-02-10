import { useState } from "react"
import { SearchFilter } from "./SearchFilter"
import { FileDattenteDashboard } from "./FileDattenteDashboard"

export const Plannification = () => {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  console.log("Plannification - Selected Status:", selectedStatus)

  return (
    <div>
      <SearchFilter
        onStatusChange={setSelectedStatus}
        onPriorityChange={setSelectedPriority}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />     
       <FileDattenteDashboard  selectedStatus={selectedStatus} selectedPriority={selectedPriority} searchQuery={searchQuery}/>
    </div>
  )
}

