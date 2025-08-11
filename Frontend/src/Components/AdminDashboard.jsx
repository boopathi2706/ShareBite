import React from 'react'
import { useState } from 'react';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';

import Users from "../Components/ManageUser.jsx"
import DonorDonate from "../Components/DonorDonate.jsx"
import AdminAnalytics from '../Components/AdminAnalytics.jsx';
import AdminDash from "../Components/AdminDash.jsx"
import Setting from "../Components/Settings.jsx"
import AdminFoodList from './AdminFoodList.jsx';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
const AdminDashboard = () => {

    const [dashboard, setDashboard] = useState(true);
      const [ManageUsers, setManageUsers] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [ManageFoodPosts, setManageFoodPosts] = useState(false);
      const [Analytics, setAnalytics] = useState(false);
      const [Settings ,setSettings]=useState(false);
  








      const handleDashboard = () => {
        setDashboard(true);
        setManageUsers(false);
        setManageFoodPosts(false);
        setAnalytics(false);
        setIsMobileMenuOpen(false);
        setSettings(false);
      };
      const handleAnalytics = () => {
        setDashboard(false);
        setManageUsers(false);
        setManageFoodPosts(false);
        setAnalytics(true);
        setIsMobileMenuOpen(false);
        setSettings(false);
      };
    
      const handleManageUsers = () => {
        setDashboard(false);
        setManageUsers(true);
        setManageFoodPosts(false);
        setAnalytics(false);
        setIsMobileMenuOpen(false);
        setSettings(false);
       
      };
    
      const handleManageFoodPosts = () => {
        
        setDashboard(false);
        setManageUsers(false);
        setManageFoodPosts(true);
        setAnalytics(false);
        setIsMobileMenuOpen(false);
        setSettings(false);
      };
      const handleSettings = () => {
        
        setDashboard(false);
        setManageUsers(false);
        setManageFoodPosts(false);
        setAnalytics(false);
        setSettings(true);
        setIsMobileMenuOpen(false);
      };
    
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
        const handleMobileNavClick = (action) => {
    action();
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-[#0f172a] text-white">
    <div className="flex flex-col lg:flex-row h-full ">
        {/* Mobile Header with Hamburger */}
        <div className="lg:hidden w-full bg-[#1e293b] border-b border-[#33333326] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[url('./assets/Logo.png')] bg-center bg-cover bg-no-repeat rounded-lg border-2 border-purple-500 shadow-lg" />
            <div>
              <h3 className="text-lg font-bold">ShareBite</h3>
              <h6 className="text-[8px] text-gray-300">
                Don't Waste It, Share It
              </h6>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded hover:bg-[#334155] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "mb-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "mb-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#1e293b] border-b border-[#33333326] absolute top-16 left-0 z-50 shadow-lg">
            <div className="flex flex-col p-4 space-y-2">
              <div
                className={`p-3 flex items-center gap-3 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  dashboard ? "bg-[#334155]" : ""
                }`}
                onClick={() => handleMobileNavClick(handleDashboard)}
              >
               <i className="fa-solid fa-user-tie"></i>
                <span className="text-sm">Admin Dashboard</span>
              </div>
              <div
                className={`p-3 flex items-center gap-3 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ManageUsers ? "bg-[#334155]" : ""
                }`}
                onClick={() => handleMobileNavClick(handleManageUsers)}
              >
                <i className="fa-solid fa-users"></i>
                <span className="text-sm">Manage Users</span>
              </div>
              <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ManageFoodPosts ? "bg-[#334155]" : ""
                }`}
                onClick={handleManageFoodPosts}
              >
                <i className="fa-solid fa-folder text-lg"></i>
                <span className="text-sm">Manage Food Posts</span>
              </div>
              <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  Analytics ? "bg-[#334155]" : ""
                }`}
                onClick={handleAnalytics}
              >
                <i className="fa-solid fa-chart-line"></i>
                <span className="text-sm">Analytics</span>
              </div>

               <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  Settings ? "bg-[#334155]" : ""
                }`}
                onClick={handleSettings}
              >
                <i className="fa-solid fa-gear"></i>
                <span className="text-sm">Settings</span>
              </div>
              <div className="border-t border-[#33333326] pt-2 mt-2">
                <div className="p-3 flex items-center justify-center gap-3 text-[#fa1105] rounded cursor-pointer hover:bg-[#334155] transition-colors">
                  <i className="fa-solid fa-arrow-right-from-bracket text-lg"></i>
                  <span className="text-sm">Logout</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:flex w-[15%] min-h-screen border-r border-[#33333326] flex-col items-center justify-between py-4 px-3 bg-[#1e293b]">
          {/* Top section */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[url('./assets/Logo.png')] bg-center bg-cover bg-no-repeat rounded-lg border-2 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300" />
              <div>
                <h3 className="text-xl font-bold">ShareBite</h3>
                <h6 className="text-[10px] text-gray-300">
                  Don't Waste It, Share It
                </h6>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 mt-4">
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  dashboard ? "bg-[#334155]" : ""
                }`}
                onClick={handleDashboard}
              >
               <i className="fa-solid fa-user-tie"></i>
                Admin Dashboard
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ManageUsers ? "bg-[#334155]" : ""
                }`}
                onClick={handleManageUsers}
              >
                <i className="fa-solid fa-users"></i>
                Manage Users
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ManageFoodPosts ? "bg-[#334155]" : ""
                }`}
                onClick={handleManageFoodPosts}
              >
                <i className="fa-solid fa-folder"></i>
                Manage Food Posts
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  Analytics ? "bg-[#334155]" : ""
                }`}
                onClick={handleAnalytics}
              >
                <i className="fa-solid fa-chart-line"></i>
                Analytics
              </div>

               <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  Settings ? "bg-[#334155]" : ""
                }`}
                onClick={handleSettings}
              >
                <i className="fa-solid fa-gear"></i>
                Seetings
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="w-full pt-4">
            <div className="p-2 flex items-center justify-center gap-2 text-[#fa1105] rounded cursor-pointer hover:bg-[#334155] transition-colors">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </div>
          </div>
        </div>


        {/* main admin dashboard */}
        {dashboard && (
       <AdminDash/>
       
        )}
        
        {ManageUsers && (
             <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
                      <Users/>
             </div>
        )}
         {ManageFoodPosts && (
             <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
                     <AdminFoodList/>
             </div>
        )}
        {Analytics && (
           <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
            <h1 className='text-purple-600 font-bold text-[1.4rem] w-full text-start'>📊 Analytics</h1>
                   <AdminAnalytics/>
             </div>
        )}
        {
          Settings && (
            <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
            <h1 className='text-purple-600 font-bold text-[1.4rem] w-full text-start'>⚙️ Admin Settings</h1>
                   <Setting/>
             </div>
          )
        }
      </div>
    </div>
  )
}

export default AdminDashboard