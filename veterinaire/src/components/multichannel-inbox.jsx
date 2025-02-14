"use client"

import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Icons = {
  email: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 6.66669L9.0755 11.0502C9.63533 11.4235 10.3647 11.4235 10.9245 11.0502L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  messenger: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 10 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 11.5175 2.07416 12.9417 2.78866 14.1667L2.08333 17.9167L5.83333 17.2114C7.05833 17.9259 8.48249 18.3334 10 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.1667 1.66669H5.83333C3.53215 1.66669 1.66666 3.53217 1.66666 5.83335V14.1667C1.66666 16.4679 3.53215 18.3334 5.83333 18.3334H14.1667C16.4679 18.3334 18.3333 16.4679 18.3333 14.1667V5.83335C18.3333 3.53217 16.4679 1.66669 14.1667 1.66669Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 9.47501C13.4362 10.1685 13.3177 10.8769 12.9947 11.4992C12.6716 12.1215 12.1609 12.6321 11.5386 12.9552C10.9163 13.2782 10.2079 13.3967 9.51444 13.2938C8.82099 13.191 8.18207 12.8713 7.67891 12.3681C7.17575 11.865 6.85599 11.2261 6.75315 10.5326C6.65032 9.83913 6.76882 9.13071 7.09187 8.50844C7.41492 7.88617 7.92555 7.37554 8.54782 7.05249C9.17009 6.72944 9.87851 6.61094 10.5719 6.71377C11.2786 6.81866 11.9319 7.14157 12.4438 7.65346C12.9557 8.16534 13.2786 8.81866 13.3833 9.52501L13.3333 9.47501ZM14.1667 5.83335H14.175H14.1667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  whatsapp: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 10 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 11.5175 2.07416 12.9417 2.78866 14.1667L2.08333 17.9167L5.83333 17.2114C7.05833 17.9259 8.48249 18.3334 10 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sms: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8333 9.16669L16.6667 3.33335M17.5 5.00002V2.50002H15M9.16666 1.66669H7.5C4.72666 1.66669 3.33333 3.33335 3.33333 5.83335V14.1667C3.33333 16.6667 4.72666 18.3334 7.5 18.3334H12.5C15.2733 18.3334 16.6667 16.6667 16.6667 14.1667V12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

const initialMessages = [
    {
      id: 1,
      type: "email",
      sender: "alice@exemple.com",
      content: "Bonjour, je voudrais confirmer...",
      date: "2023-07-20 10:30",
      isRead: false,
    },
    {
      id: 2,
      type: "messenger",
      sender: "Bob Martin",
      content: "Est-ce que je peux amener mon ...",
      date: "2023-07-20 11:15",
      isRead: true,
    },
    {
      id: 3,
      type: "instagram",
      sender: "@charlie_horse",
      content: "J'ai vu votre post sur les vac...",
      date: "2023-07-19 16:45",
      isRead: false,
    },
    {
      id: 4,
      type: "whatsapp",
      sender: "+33 6 12 34 56 78",
      content: "Bonjour, mon cheval a l'air ma...",
      date: "2023-07-19 09:20",
      isRead: true,
    },
    {
      id: 5,
      type: "sms",
      sender: "+33 6 98 76 54 32",
      content: "Rappel : Votre rendez-vous est...",
      date: "2023-07-18 18:00",
      isRead: false,
    },
    {
      id: 6,
      type: "email",
      sender: "contact@entreprise.com",
      content: "Votre facture est disponible...",
      date: "2023-07-18 14:12",
      isRead: true,
    },
    {
      id: 7,
      type: "messenger",
      sender: "David Johnson",
      content: "Tu seras là ce soir ?",
      date: "2023-07-17 21:50",
      isRead: false,
    },
    {
      id: 8,
      type: "instagram",
      sender: "@travel_life",
      content: "J'adore tes photos de voyage !",
      date: "2023-07-16 17:30",
      isRead: true,
    },
    {
      id: 9,
      type: "whatsapp",
      sender: "+33 6 45 23 78 90",
      content: "On se retrouve à 15h devant...",
      date: "2023-07-15 10:05",
      isRead: false,
    },
    {
      id: 10,
      type: "sms",
      sender: "+33 6 78 12 34 56",
      content: "Code de validation : 472839",
      date: "2023-07-14 08:45",
      isRead: true,
    },
    {
      id: 11,
      type: "email",
      sender: "support@webshop.com",
      content: "Votre commande a été expédiée...",
      date: "2023-07-13 16:22",
      isRead: false,
    },
    {
      id: 12,
      type: "messenger",
      sender: "Emma Watson",
      content: "Salut, on se voit demain ?",
      date: "2023-07-12 20:30",
      isRead: true,
    },
    {
      id: 13,
      type: "instagram",
      sender: "@foodlover",
      content: "Cette recette a l'air délicieuse !",
      date: "2023-07-11 13:10",
      isRead: false,
    },
    {
      id: 14,
      type: "whatsapp",
      sender: "+33 6 32 14 56 89",
      content: "On va faire un barbecue samedi !",
      date: "2023-07-10 18:40",
      isRead: true,
    },
    {
      id: 15,
      type: "sms",
      sender: "+33 6 91 23 45 67",
      content: "Nouvelle promo chez votre opérateur...",
      date: "2023-07-09 09:15",
      isRead: false,
    },
  ];
  

export const MultiChannelInbox=() =>{
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSource, setSelectedSource] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const messagesPerPage = 10

  const handleMessageClick = (message) => {
    setSelectedMessage(message)
    if (!message.isRead) {
      setMessages((prevMessages) => prevMessages.map((msg) => (msg.id === message.id ? { ...msg, isRead: true } : msg)))
    }
  }

  const filteredMessages = useMemo(() => {
    return messages.filter(
      (message) =>
        (selectedSource === "all" || message.type === selectedSource) &&
        (message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
          message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          message.date.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [messages, searchQuery, selectedSource])

  const paginatedMessages = useMemo(() => {
    const startIndex = (currentPage - 1) * messagesPerPage
    return filteredMessages.slice(startIndex, startIndex + messagesPerPage)
  }, [filteredMessages, currentPage])

  return (
    <div className="max-w-[1400px] mx-auto p-2 sm:p-5 lg:p-8 font-sans min-w-[320px] flex flex-col h-screen">
      <header className="mb-2 sm:mb-4">
        <h1 className="text-teal-700 text-lg sm:text-xl lg:text-3xl font-semibold mb-2 sm:mb-4">
          Boîte de Réception Multicanale
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-2 sm:mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full flex-1 px-2 py-2 text-sm text-gray-700 border border-gray-200 rounded-md placeholder-gray-400"
          />
          <div className="relative w-full sm:w-[180px]">
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full px-2 py-2 text-sm text-gray-700 border border-gray-200 rounded-md appearance-none bg-white"
            >
              <option value="all">Toutes les sources</option>
              <option value="email">Email</option>
              <option value="messenger">Messenger</option>
              <option value="instagram">Instagram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="sms">SMS</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 lg:gap-6 flex-grow overflow-hidden">
        <section className="bg-white border border-gray-200 rounded-lg p-2 sm:p-4 lg:p-6 flex-grow overflow-hidden flex flex-col">
          <h2 className="text-base font-semibold text-gray-900 mb-2">Messages</h2>
          <div className="overflow-x-auto flex-grow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Expéditeur
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                  >
                    Contenu
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedMessages.map((message) => (
                  <tr
                    key={message.id}
                    onClick={() => handleMessageClick(message)}
                    className={`cursor-pointer hover:bg-gray-50 ${
                      selectedMessage?.id === message.id ? "bg-gray-100" : ""
                    } ${!message.isRead ? "font-semibold" : ""}`}
                  >
                    <td className="px-2 py-1 whitespace-nowrap">
                      <div className="flex items-center text-gray-500">{Icons[message.type]}</div>
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      <div
                        className={`text-xs sm:text-sm lg:text-base ${!message.isRead ? "text-gray-900" : "text-gray-700"}`}
                      >
                        {message.sender}
                      </div>
                    </td>
                    <td className="px-2 py-1 hidden sm:table-cell">
                      <div
                        className={`text-xs sm:text-sm lg:text-base ${!message.isRead ? "text-gray-900" : "text-gray-500"} truncate max-w-[150px] sm:max-w-[200px] lg:max-w-[400px]`}
                      >
                        {message.content}
                      </div>
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      <div
                        className={`text-xs sm:text-sm lg:text-base ${!message.isRead ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {message.date}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Affichage de {paginatedMessages.length} sur {filteredMessages.length} messages
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm">{currentPage}</span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredMessages.length / messagesPerPage)))
                  }
                  disabled={currentPage === Math.ceil(filteredMessages.length / messagesPerPage)}
                  className="px-2 py-1 border rounded text-sm disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4 lg:p-6 lg:w-[350px]">
          <h2 className="text-base font-semibold text-gray-900 mb-2">Détails du Message</h2>
          <div className="text-sm">
            {selectedMessage ? (
              <div className="space-y-2">
                <p>
                  <span className="text-gray-500 font-medium">De:</span> {selectedMessage.sender}
                </p>
                <p>
                  <span className="text-gray-500 font-medium">Date:</span> {selectedMessage.date}
                </p>
                <p>
                  <span className="text-gray-500 font-medium">Message:</span>
                </p>
                <p className="text-gray-700">{selectedMessage.content}</p>
              </div>
            ) : (
              <p className="text-gray-500 italic">Sélectionnez un message pour voir les détails</p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

