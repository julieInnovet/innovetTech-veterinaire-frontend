import { useState } from "react";
import {
  LayoutDashboard, Bot, Inbox, Plus, Users, Calendar, FileText,
  ClipboardList, Activity, ScrollText, DollarSign, Settings,
  BarChart, ChevronDown, ChartNoAxesColumnIncreasing, Store,
  UserCircle, UserPlus, ClipboardPlus, Menu,
} from "lucide-react";
import "./Sidebar.css";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [expandedSections, setExpandedSections] = useState({
    documents: false,
    crm: false,
    owners: false,
    generalDocs: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSetActive = (page, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActivePage(page);
  };

  const isActive = (page) => activePage === page;

  return (
    <div className="sidebar">
      <div className="logos">
        <img src={Logo} alt="Logo" style={{ width: "250px", height: "100px" }} />
      </div>
                
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h3>SARAH SMITH</h3>
          <p>sarah.smith@example.com</p>
        </div>
      </div>

      <nav className="nav-menu">
        <a
          href="#dashboard"
          className={`nav-item ${isActive("dashboard") ? "active" : ""}`}
          onClick={(e) => handleSetActive("dashboard", e)}
        >
          <LayoutDashboard size={20} />
          <span>Tableau de bord</span>
        </a>

        <a
          href="#ia-assistant"
          className={`nav-item ${isActive("ia-assistant") ? "active" : ""}`}
          onClick={(e) => handleSetActive("ia-assistant", e)}
        >
          <Bot size={20} />
          <span>IA Assistant</span>
        </a>

        <a
          href="#inbox"
          className={`nav-item ${isActive("inbox") ? "active" : ""}`}
          onClick={(e) => handleSetActive("inbox", e)}
        >
          <Inbox size={20} />
          <span>Boîte de Réception</span>
        </a>

        {/* Consultation Section */}
        <div className="nav-section">
          <div
            className="nav-section-header"
            onClick={() => toggleSection("documents")}
          >
            <UserPlus size={20} />
            <span>Consultation</span>
            <ChevronDown
              className={expandedSections.documents ? "rotated" : ""}
              size={16}
            />
          </div>
          {expandedSections.documents && (
            <div className="nav-section-content">
              <a
                href="#new-consultation"
                className={`nav-item sub-item ${isActive("new-consultation") ? "active" : ""}`}
                onClick={(e) => handleSetActive("new-consultation", e)}
              >
                <Plus size={20} />
                <span>Nouvelle Consultation</span>
              </a>
            </div>
          )}
        </div>

        <a
          href="#patients-list"
          className={`nav-item ${isActive("patients-list") ? "active" : ""}`}
          onClick={(e) => handleSetActive("patients-list", e)}
        >
          <Users size={20} />
          <span>Liste des patients</span>
        </a>

        <a
          href="#planning"
          className={`nav-item ${isActive("planning") ? "active" : ""}`}
          onClick={(e) => handleSetActive("planning", e)}
        >
          <Calendar size={20} />
          <span>Planification</span>
        </a>

        {/* Owners Section */}
        <div className="nav-section">
          <div
            className="nav-section-header"
            onClick={() => toggleSection("owners")}
          >
            <UserPlus size={20} />
            <span>Propriétaires</span>
            <ChevronDown
              className={expandedSections.owners ? "rotated" : ""}
              size={16}
            />
          </div>
          {expandedSections.owners && (
            <div className="nav-section-content">
              <a
                href="#new-owner"
                className={`nav-item sub-item ${isActive("new-owner") ? "active" : ""}`}
                onClick={(e) => handleSetActive("new-owner", e)}
              >
                <Plus size={20} />
                <span>Nouveau propriétaires</span>
              </a>
            </div>
          )}
        </div>

        {/* Documents Section */}
        <div className="nav-section">
          <div
            className="nav-section-header"
            onClick={() => toggleSection("generalDocs")}
          >
            <FileText size={20} />
            <span>Documents</span>
            <ChevronDown
              className={expandedSections.generalDocs ? "rotated" : ""}
              size={16}
            />
          </div>
          {expandedSections.generalDocs && (
            <div className="nav-section-content">
              <a
                href="#prescriptions"
                className={`nav-item sub-item ${isActive("prescriptions") ? "active" : ""}`}
                onClick={(e) => handleSetActive("prescriptions", e)}
              >
                <ClipboardList size={18} />
                <span>Ordonnances</span>
              </a>
              <a
                href="#certificates"
                className={`nav-item sub-item ${isActive("certificates") ? "active" : ""}`}
                onClick={(e) => handleSetActive("certificates", e)}
              >
                <ScrollText size={18} />
                <span>Certificats</span>
              </a>
              <a
                href="#health-report"
                className={`nav-item sub-item ${isActive("health-report") ? "active" : ""}`}
                onClick={(e) => handleSetActive("health-report", e)}
              >
                <Activity size={18} />
                <span>Bilan de santé</span>
              </a>
              <a
                href="#care-protocol"
                className={`nav-item sub-item ${isActive("care-protocol") ? "active" : ""}`}
                onClick={(e) => handleSetActive("care-protocol", e)}
              >
                <ClipboardPlus size={18} />
                <span>Protocole de soins</span>
              </a>
            </div>
          )}
        </div>

        {/* CRM Sales Section */}
        <div className="nav-section">
          <div
            className="nav-section-header"
            onClick={() => toggleSection("crm")}
          >
            <BarChart size={20} />
            <span>CRM Ventes</span>
            <ChevronDown
              className={expandedSections.crm ? "rotated" : ""}
              size={16}
            />
          </div>
          {expandedSections.crm && (
            <div className="nav-section-content">
              <a
                href="#invoices"
                className={`nav-item sub-item ${isActive("invoices") ? "active" : ""}`}
                onClick={(e) => handleSetActive("invoices", e)}
              >
                <Menu size={18} />
                <span>Liste des factures</span>
              </a>
              <a
                href="#payments"
                className={`nav-item sub-item ${isActive("payments") ? "active" : ""}`}
                onClick={(e) => handleSetActive("payments", e)}
              >
                <DollarSign size={18} />
                <span>Paiements</span>
              </a>
              <a
                href="#new-quote"
                className={`nav-item sub-item ${isActive("new-quote") ? "active" : ""}`}
                onClick={(e) => handleSetActive("new-quote", e)}
              >
                <FileText size={18} />
                <span>Nouveau devis</span>
              </a>
              <a
                href="#new-invoice"
                className={`nav-item sub-item ${isActive("new-invoice") ? "active" : ""}`}
                onClick={(e) => handleSetActive("new-invoice", e)}
              >
                <FileText size={18} />
                <span>Nouvelle facture</span>
              </a>
              <a
                href="#financial-reports"
                className={`nav-item sub-item ${isActive("financial-reports") ? "active" : ""}`}
                onClick={(e) => handleSetActive("financial-reports", e)}
              >
                <ChartNoAxesColumnIncreasing size={18} />
                <span>Rapport financiers</span>
              </a>
            </div>
          )}
        </div>

        <a
          href="#stocks"
          className={`nav-item ${isActive("stocks") ? "active" : ""}`}
          onClick={(e) => handleSetActive("stocks", e)}
        >
          <Store size={20} />
          <span>Registres stocks et pre...</span>
        </a>

        <a
          href="#settings"
          className={`nav-item ${isActive("settings") ? "active" : ""}`}
          onClick={(e) => handleSetActive("settings", e)}
        >
          <Settings size={20} />
          <span>Paramètres</span>
        </a>

        <a
          href="#client-portal"
          className={`nav-item ${isActive("client-portal") ? "active" : ""}`}
          onClick={(e) => handleSetActive("client-portal", e)}
        >
          <UserCircle size={20} />
          <span>Portail Client</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;