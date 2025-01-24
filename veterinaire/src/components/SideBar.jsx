/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Bot,
  Inbox,
  Plus,
  Users,
  Calendar,
  FileText,
  ClipboardList,
  Activity,
  ScrollText,
  DollarSign,
  Settings,
  BarChart,
  ChevronDown,
  BarChartIcon as ChartNoAxesColumnIncreasing,
  Store,
  UserCircle,
  UserPlus,
  ClipboardPlus,
  Menu,
} from "lucide-react"
import Logo from "../assets/logo.png"

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState("dashboard")
  const [expandedSections, setExpandedSections] = useState({
    documents: false,
    crm: false,
    owners: false,
    generalDocs: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleSetActive = (page, event) => {
    event.preventDefault()
    setActivePage(page)
    if (window.innerWidth < 1024) {
      toggleSidebar()
    }
  }

  const isActive = (page) => activePage === page

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-30 w-62 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 -mt-2 mb-1">
            <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-[250px] h-[100px] object-contain" />
          </div>

          <div className="flex items-center gap-3 px-6 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#e5deff]"></div>
            <div>
              <h3 className="text-base font-bold text-[#1A1F2C]">SARAH SMITH</h3>
              <p className="text-sm font-bold text-[#8E9196] mt-1">sarah.smith@example.com</p>
            </div>
          </div>

          <nav className="flex flex-col gap-0.5 flex-grow">
            {[
              { to: "/dashboard", icon: LayoutDashboard, label: "Tableau de bord", id: "dashboard" },
              { to: "/ia-assistant", icon: Bot, label: "IA Assistant", id: "ia-assistant" },
              { to: "/test", icon: Inbox, label: "Boîte de Réception", id: "inbox" },
            ].map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive(item.id) ? "bg-[#0f766e] text-white" : ""}`}
                onClick={(e) => {
                  handleSetActive(item.id, e)
                  navigate(item.to)
                }}
              >
                <item.icon size={20} />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
              </Link>
            ))}

            {/* Consultation Section */}
            <div className="flex flex-col">
              <div
                className="flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white"
                onClick={() => toggleSection("documents")}
              >
                <UserPlus size={20} />
                <span>Consultation</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-200 ${expandedSections.documents ? "rotate-180" : ""}`}
                  size={16}
                />
              </div>
              {expandedSections.documents && (
                <div className="bg-[#f8f8fb]">
                  <Link
                    to="#new-consultation"
                    className={`flex items-center pl-14 pr-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("new-consultation") ? "bg-[#0f766e] text-white" : ""}`}
                    onClick={(e) => handleSetActive("new-consultation", e)}
                  >
                    <Plus size={20} />
                    <span>Nouvelle Consultation</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="patient"
              className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("patients-list") ? "bg-[#0f766e] text-white" : ""}`}
              onClick={(e) => {handleSetActive("patients-list", e)
                navigate("/patient")
              }}
            >
              <Users size={20} />
              <span>Liste des patients</span>
            </Link>

            <Link
              to="/planning"
              className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("planning") ? "bg-[#0f766e] text-white" : ""}`}
              onClick={(e) => {
                handleSetActive("planning", e)
                navigate("/planning")
              }}
            >
              <Calendar size={20} />
              <span>Planification</span>
            </Link>

            {/* Owners Section */}
            <div className="flex flex-col">
              <div
                className="flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white"
                onClick={() => toggleSection("owners")}
              >
                <UserPlus size={20} />
                <span>Propriétaires</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-200 ${expandedSections.owners ? "rotate-180" : ""}`}
                  size={16}
                />
              </div>
              {expandedSections.owners && (
                <div className="bg-[#f8f8fb]">
                  <Link
                    to="#new-owner"
                    className={`flex items-center pl-14 pr-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("new-owner") ? "bg-[#0f766e] text-white" : ""}`}
                    onClick={(e) => handleSetActive("new-owner", e)}
                  >
                    <Plus size={20} />
                    <span>Nouveau propriétaires</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Documents Section */}
            <div className="flex flex-col">
              <div
                className="flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white"
                onClick={() => toggleSection("generalDocs")}
              >
                <FileText size={20} />
                <span>Documents</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-200 ${expandedSections.generalDocs ? "rotate-180" : ""}`}
                  size={16}
                />
              </div>
              {expandedSections.generalDocs && (
                <div className="bg-[#f8f8fb]">
                  {[
                    { to: "#prescriptions", icon: ClipboardList, label: "Ordonnances" },
                    { to: "#certificates", icon: ScrollText, label: "Certificats" },
                    { to: "#health-report", icon: Activity, label: "Bilan de santé" },
                    { to: "#care-protocol", icon: ClipboardPlus, label: "Protocole de soins" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center pl-14 pr-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive(item.to.slice(1)) ? "bg-[#0f766e] text-white" : ""}`}
                      onClick={(e) => handleSetActive(item.to.slice(1), e)}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CRM Sales Section */}
            <div className="flex flex-col">
              <div
                className="flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white"
                onClick={() => toggleSection("crm")}
              >
                <BarChart size={20} />
                <span>CRM Ventes</span>
                <ChevronDown
                  className={`ml-auto transition-transform duration-200 ${expandedSections.crm ? "rotate-180" : ""}`}
                  size={16}
                />
              </div>
              {expandedSections.crm && (
                <div className="bg-[#f8f8fb]">
                  {[
                    { to: "#invoices", icon: Menu, label: "Liste des factures" },
                    { to: "#payments", icon: DollarSign, label: "Paiements" },
                    { to: "#new-quote", icon: FileText, label: "Nouveau devis" },
                    { to: "#new-invoice", icon: FileText, label: "Nouvelle facture" },
                    { to: "#financial-reports", icon: ChartNoAxesColumnIncreasing, label: "Rapport financiers" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center pl-14 pr-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive(item.to.slice(1)) ? "bg-[#0f766e] text-white" : ""}`}
                      onClick={(e) => handleSetActive(item.to.slice(1), e)}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="#stocks"
              className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("stocks") ? "bg-[#0f766e] text-white" : ""}`}
              onClick={(e) => handleSetActive("stocks", e)}
            >
              <Store size={20} />
              <span>Registres stocks et pre...</span>
            </Link>

            <Link
              to="#settings"
              className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("settings") ? "bg-[#0f766e] text-white" : ""}`}
              onClick={(e) => handleSetActive("settings", e)}
            >
              <Settings size={20} />
              <span>Paramètres</span>
            </Link>

            <Link
              to="#client-portal"
              className={`flex items-center px-6 py-3 text-[#555555] gap-3 transition-all duration-200 cursor-pointer font-bold text-sm hover:bg-[#0f766e] hover:text-white ${isActive("client-portal") ? "bg-[#0f766e] text-white" : ""}`}
              onClick={(e) => handleSetActive("client-portal", e)}
            >
              <UserCircle size={20} />
              <span>Portail Client</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  )
}

