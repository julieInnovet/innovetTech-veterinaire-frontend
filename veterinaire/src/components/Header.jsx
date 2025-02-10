
import { Bell, Search, Settings, Menu } from "lucide-react"
import Logo from "../assets/logo.png"

export const Header = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 h-16 lg:h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-0 lg:px-6 md:px-4">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden mr-4 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <img src={Logo || "/placeholder.svg"} alt="Logo" className="h-16 lg:hidden" />

        <div className="hidden lg:flex items-center w-full max-w-[300px]">
          <Search size={20} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="flex-grow h-10 px-3 py-2 border border-gray-200 rounded-md text-sm bg-white text-gray-900 focus:outline-none focus:border-teal-700 focus:bg-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <button className="relative flex items-center justify-center bg-transparent border-none p-2 cursor-pointer text-gray-900 rounded-md transition duration-200 ease-in-out hover:bg-gray-100 hover:text-teal-700">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 flex items-center justify-center bg-teal-700 text-white text-xs px-[5px] py-[2px] rounded-full border-2 border-white">
            3
          </span>
        </button>
        <button className="flex items-center justify-center bg-transparent border-none p-2 cursor-pointer text-gray-900 rounded-md transition duration-200 ease-in-out hover:bg-gray-100 hover:text-teal-700">
          <Settings size={20} />
        </button>
        <div className="hidden lg:flex items-center gap-3 p-2 rounded-md cursor-pointer transition duration-200 ease-in-out hover:bg-gray-100">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            {/* You can add an image or initials here */}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 m-0">Sarah Smith</h3>
            <p className="text-xs text-gray-500 m-0">Administrateur</p>
          </div>
        </div>
      </div>
    </header>
  )
}

