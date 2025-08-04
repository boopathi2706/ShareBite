import React from "react";

const DonarDashBoard = () => {
  return (
    <div className="h-screen w-screen  ">
      <div className="flex h-full flex-row items-center justify-center">


        <div className="w-[15%] h-full border-r border-r-[#33333326]   flex flex-col items-center justify-between pt-2 pb-3 pr-4">
          <div className="w-[90%] h-[38%] flex flex-col items-center justify-evenly">
            
            <div className="w-full h-[30%]  flex flex-row items-start justify-start pl-3 gap-1 pb-4">
              <div className='w-[40%] h-[95%] bg-[url("../assets/Logo.png")] bg-center bg-cover bg-no-repeat'></div>
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-[1.5rem]">ShareBite</h3>
                <h6 className="text-[9px]">Don’t Waste It, Share It</h6>
              </div>
            </div>
            <div className=" w-full p-2 flex flex-row items-start justify-start gap-1 cursor-pointer rounded-[5px]  hover:bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] hover:text-white ">
              <i className="fa-solid fa-globe pt-1"></i>Donar Dashboard
            </div>
            <div className=" w-full p-2 flex flex-row items-start justify-start gap-1 cursor-pointer rounded-[5px] hover:bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] hover:text-white">
              <i className="fa-solid fa-circle-plus pt-1"></i>Add Food Post
            </div>
            <div className=" w-full p-2 flex flex-row items-start justify-start gap-1 cursor-pointer rounded-[5px] hover:bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] hover:text-white">
              <i className="fa-solid fa-folder pt-1"></i>My Food Posts
            </div>
            <div className="-300 w-full p-2 flex flex-row items-start justify-start gap-1 cursor-pointer rounded-[5px] hover:bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] hover:text-white">
              <i className="fa-solid fa-user pt-1"></i>Profile
            </div>
          </div>
          <div className="w-[90%] h-[7%] flex flex-col items-center justify-evenly ">
            <div className=" w-full p-2 flex flex-row items-center justify-center gap-1 bg-red-600 rounded-[5px] text-white cursor-pointer hover:bg-red-400">
              <i className="fa-solid fa-arrow-right-from-bracket pt-1"></i>
              logout
            </div>
          </div>
        </div>




        <div className="w-[85%] h-[93%] flex flex-col items-center justify-center max-x-md:w-full text-white">
          <div className="w-full h-[5%] text-[1.5rem] text-black pl-3 pb-5">
            Donar Dashboard
          </div>

          <div className="w-full h-[35%]  flex flex-col items-center justify-center">
            <h1 className="pl-3 w-full text-start text-black text-[1.2rem]">Your Impact</h1>
            <div className="w-full h-[90%] bg-white flex flex-row items-center justify-evenly">
              <div className="h-[95%] w-[30%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[5px] flex flex-col items-start justify-center pl-10 gap-1">
                <i className="fa-solid fa-kaaba text-[1.5rem] pb-3"></i>
                <h2>Total Food Posts</h2>
                <h3 className="text-[2rem]">18</h3>
                <h4 className="text-[12px]  text-shadow-white">Food Items shared by you</h4>
                <h4 className="w-full text-end pr-6 text-[14px] cursor-pointer hover:underline hover:text-blue-300">View details</h4>
              </div>
              <div className="h-[95%] w-[30%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[5px] flex flex-col items-start justify-center pl-10 gap-1">
                <i class="fa-solid fa-bowl-food text-[1.5rem] pb-3"></i>
                <h2>Total Food Donated</h2>
                <h3 className="text-[2rem]">350 kg</h3>
                <h4 className="text-[12px] text-shadow-white">
                  Cumulative Weight of your donations
                </h4>
                <h4 className="w-full text-end pr-6 text-[14px] cursor-pointer hover:underline hover:text-blue-300">View details</h4>
              </div>
              <div className="h-[95%] w-[30%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[5px] flex flex-col items-start justify-center pl-10 gap-1">
              <i class="fa-solid fa-circle-check text-[1.5rem] pb-3"></i>
                <h2>Items Claimed</h2>
                <h3 className="text-[2rem]">12</h3>
                <h4 className="text-[12px]  text-shadow-white">Successful pickups by recipients</h4>
                <h4 className="w-full text-end pr-6 text-[14px] cursor-pointer hover:underline hover:text-blue-300">View details</h4>
              </div>
            </div>
          </div>

          <div className="w-full h-[30%] text-black flex flex-row items-center justify-evenly ">
            <div className="w-[48%] h-[98%] flex flex-col items-start justify-start pl-10 pt-2 gap-2">
                <h1 className="text-[1.3rem] pb-0">Quick Actions</h1>
                <h3 className="text-[12px] pb-2 mt-0 pt-0 text-gray-700 ">Perform common tasks instanly</h3>
                <div className="w-[80%] h-[20%] text-white bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] flex flex-row items-center justify-center gap-2 rounded-[5px] cursor-pointer"> <i className="fa-solid fa-circle-plus "></i>Add New Food Post</div>
                <div className="w-[80%] h-[20%] flex flex-row items-center justify-center gap-2 rounded-[5px] border-1 cursor-pointer" ><i className="fa-solid fa-folder "></i>View My Posts</div>
            </div>
            <div className="w-[45%] h-[98%] flex flex-col items-start justify-start p-3">
              <div>
                <h1 className="text-[1.3rem]">Recent Activity</h1>
                <h3 className="text-[12px] pb-4 text-gray-700">Your latest interactions on ShareBite</h3>
              </div>
              <div className="h-[90%] w-[90%] flex flex-col pl-10 gap-4">
                <div className="w-[80%] h-[38%] border-1 flex flex-row items-start justify-start pl-4 gap-3 p-2 rounded-[5px]">
                     <i className="fa-solid fa-circle-plus pt-2 text-blue-500"></i>
                   <div className="w-[70%] h-full ">
                  
                      <h1 className="text-[14px]">Posted "Fresh Vegetables" (10 kg) </h1>
                      <p className="text-[10px]">5 minutes ago</p>
                   </div>
                </div>
                
                  <div className="w-[80%] h-[38%] border-1 flex flex-row items-start justify-start pl-4 gap-3 p-2 rounded-[5px]">
                    <i class="fa-solid fa-circle-check  pt-2 text-green-500"></i>
                   <div className="w-[70%] h-full ">
                  
                      <h1 className="text-[14px]">Post "Canned Goods" claimed </h1>
                      <p className="text-[10px]">1 hour ago</p>
                   </div>
        
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-full h-[30%] flex flex-col text-black items-start justify-start p-4">
            <h1 className="text-[1.2rem] pb-2">Top Donors This Month</h1>
            <div className="w-full h-[80%] flex flex-row flex-wrap gap-4">
              <div className="w-[45%] h-[40%] border-1 flex flex-row items-center justify-start pl-5 gap-3 rounded-[5px] ml-10">
                 <div className="w-[7%] h-[80%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[50%]"></div>
                 <div className="w-[60%]">
                    <h1>Community Kitchen</h1>
                    <p className="text-[12px]">Donated : 1200kg</p>
                 </div>
              </div>
               <div className="w-[45%] h-[40%] border-1 flex flex-row items-center justify-start pl-5 gap-3 rounded-[5px] ml-10">
                 <div className="w-[7%] h-[80%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[50%]"></div>
                 <div className="w-[60%]">
                    <h1>Community Kitchen</h1>
                    <p className="text-[12px]">Donated : 1200kg</p>
                 </div>
              </div>
               <div className="w-[45%] h-[40%] border-1 flex flex-row items-center justify-start pl-5 gap-3 rounded-[5px] ml-10">
                 <div className="w-[7%] h-[80%] bg-[linear-gradient(179.7deg,_rgba(249,21,215,1)_1.1%,_rgba(22,0,98,1)_99%)] rounded-[50%]"></div>
                 <div className="w-[60%]">
                    <h1>Community Kitchen</h1>
                    <p className="text-[12px]">Donated : 1200kg</p>
                 </div>
              </div>
             
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DonarDashBoard;
