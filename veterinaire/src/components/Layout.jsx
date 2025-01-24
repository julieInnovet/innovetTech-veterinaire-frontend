// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Header } from "./Header";
// import { Sidebar } from "./Sidebar";

// export const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Main content area */}
//       <div className="flex flex-col flex-grow">
//         {/* Header */}
//         <Header toggleSidebar={toggleSidebar} />

//         {/* Content area */}
//         <main className="flex-grow p-6 overflow-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };
