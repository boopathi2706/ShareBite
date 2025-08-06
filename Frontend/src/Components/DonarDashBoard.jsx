import React, { useState } from "react";
import DonorProfile from "./DonorProfile";
import DonorDonate from "./DonorDonate";
import AddDonate from "./AddDonate";
import DonorDash from "./DonorDash";

const DonarDashBoard = () => {
  const [dashboard, setDashboard] = useState(true);
  const [adddonate, setAdddonate] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [donate, setDonate] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleDashboard = () => {
    setDashboard(true);
    setAdddonate(false);
    setDonate(false);
    setProfile(false);
    setIsMobileMenuOpen(false);
  };
  const handleProfile = () => {
    setDashboard(false);
    setAdddonate(false);
    setDonate(false);
    setProfile(true);
    setIsMobileMenuOpen(false);
  };

  const handleAdddonate = () => {
    setDashboard(false);
    setAdddonate(true);
    setDonate(false);
    setProfile(false);
    setIsMobileMenuOpen(false);
    console.log("b");
  };

  const handledonate = () => {
    console.log("bop");
    setDashboard(false);
    setAdddonate(false);
    setDonate(true);
    setProfile(false);
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
      <div className="flex flex-col lg:flex-row h-full">
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
                <i className="fa-solid fa-globe text-lg"></i>
                <span className="text-sm">Donar Dashboard</span>
              </div>
              <div
                className={`p-3 flex items-center gap-3 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  adddonate ? "bg-[#334155]" : ""
                }`}
                onClick={() => handleMobileNavClick(handleAdddonate)}
              >
                <i className="fa-solid fa-circle-plus text-lg"></i>
                <span className="text-sm">Add Food Post</span>
              </div>
              <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  donate ? "bg-[#334155]" : ""
                }`}
                onClick={handledonate}
              >
                <i className="fa-solid fa-folder text-lg"></i>
                <span className="text-sm">My Food Posts</span>
              </div>
              <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  profile ? "bg-[#334155]" : ""
                }`}
                onClick={handleProfile}
              >
                <i className="fa-solid fa-user text-lg"></i>
                <span className="text-sm">Profile</span>
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
                <i className="fa-solid fa-globe"></i>
                Donar Dashboard
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  adddonate ? "bg-[#334155]" : ""
                }`}
                onClick={handleAdddonate}
              >
                <i className="fa-solid fa-circle-plus"></i>
                Add Food Post
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  donate ? "bg-[#334155]" : ""
                }`}
                onClick={handledonate}
              >
                <i className="fa-solid fa-folder"></i>
                My Food Posts
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  profile ? "bg-[#334155]" : ""
                }`}
                onClick={handleProfile}
              >
                <i className="fa-solid fa-user"></i>
                Profile
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

        {/* Dashboard */}
        {dashboard && (
          <DonorDash handleEasyAdd={handleAdddonate} handleVisitDonate={handledonate}/>
        )}

        {/* Add Donate Form */}
        {adddonate && (
          <div className="w-full lg:w-[85%] p-4 lg:p-6">
            <AddDonate/>
          </div>
        )}



        {/* donor donate */}
        {donate && (
          <div className="w-full lg:w-[85%] p-4 lg:p-6 flex items-center justify-center">
            <DonorDonate/>
          </div>
        )}



        {/* donar profile */}
        {profile && (
          <div className="w-full lg:w-[85%] p-4 lg:p-6 flex items-center justify-center">
             <DonorProfile/>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonarDashBoard;
