import React, { useState } from "react";
import ReceiverProfilePage from "./ReceiverProfilePage";
import ReceiverFoodBox from "./ReceiverFoodBox";
import ReceiverDash from "./ReceiverDash";

const ReceiverDashboard = () => {
  const [dashboard, setDashboard] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [FoodListOption, setFoodListOption] = useState(false);
  const [ReceiverProfile, setReceiverProfile] = useState(false);

  //  profile

 




  const handleDashboard = () => {
    setDashboard(true);

    setFoodListOption(false);
    setReceiverProfile(false);
    setIsMobileMenuOpen(false);
  };
  const handleReceiverProfile = () => {
    setDashboard(false);

    setFoodListOption(false);
    setReceiverProfile(true);
    setIsMobileMenuOpen(false);
  };

  const handleFoodListOption = () => {
    setDashboard(false);

    setFoodListOption(true);
    setReceiverProfile(false);
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
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  FoodListOption ? "bg-[#334155]" : ""
                }`}
                onClick={handleFoodListOption}
              >
                <i className="fa-solid fa-list-check"></i>
                <span className="text-sm">Food Lists</span>
              </div>
              <div
                className={`p-3 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ReceiverProfile ? "bg-[#334155]" : ""
                }`}
                onClick={handleReceiverProfile}
              >
                <i className="fa-solid fa-id-card-clip"></i>
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
                <i className="fa-solid fa-user-tie"></i>
                Receiver Dashboard
              </div>

              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  FoodListOption ? "bg-[#334155]" : ""
                }`}
                onClick={handleFoodListOption}
              >
                <i className="fa-solid fa-list-check"></i>
                Food Lists
              </div>
              <div
                className={`p-2 flex items-center gap-2 rounded cursor-pointer hover:bg-[#334155] transition-colors ${
                  ReceiverProfile ? "bg-[#334155]" : ""
                }`}
                onClick={handleReceiverProfile}
              >
                <i className="fa-solid fa-id-card-clip"></i>
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





        {/* receiver dashboard */}
        {dashboard && (
               <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
                 <ReceiverDash/>      
             </div>
        )}
        {
          FoodListOption && (
               <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-black ">
                   <ReceiverFoodBox/>
                </div>
          )
        }



        {ReceiverProfile && (
           <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 text-white ">
               <ReceiverProfilePage/>
            </div>
        )}

      </div>
    </div>
  );
};

export default ReceiverDashboard;
