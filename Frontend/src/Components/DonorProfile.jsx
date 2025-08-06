import React from 'react'

const DonorProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full bg-[#334155] rounded-lg overflow-hidden shadow-lg lg:flex-row">
              <div className="w-[90%] h-[94vh]  flex flex-col items-start justify-evenly lg:w-[50%]">
                <h1 className="text-[1.5rem] pl-4 text-purple-600 font-bold">
                  Personal Information
                </h1>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">Full Name</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">Boopathi</div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">Email Address</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">boopathi.v2023cse@sece.ac.in</div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">Phone Number</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">+91 7010868772 </div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">Street Address</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">1/101 Thimmachur road, Sp puram</div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">City</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">Kallakurichi</div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">State/Province</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">Tamil nadu</div>
                </div>

                <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
                  <h2 className="text-start w-[90%]">Zip/Postal Code</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">605 751</div>
                </div>

                <div className="w-full h-[60px] flex flex-col items-center justify-center">
                  <h2 className="text-start w-[90%]">Preferred Donation Categories</h2>
                  <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2] ">Vegetarian</div>
                </div>
              </div>
              <div className="w-[90%] h-[94vh]  flex flex-col items-center justify-start pl-5 lg:w-[50%]">
                <h1 className="text-[1.5rem] pl-4 text-start w-full pt-10 lg:pt-3 text-purple-600 font-bold">
                  Donation Overview
                </h1>
                <div className="w-full pl-4 h-[50%] flex flex-col items-start justify-evenly lg:h-[40%] gap-3">
                  <h1>💰 Total Donations: 50</h1>
                  <h1>💸 Estimated Value: $1,200</h1>
                  <h1>📅 Last Donation: October 26, 2023</h1>
                  <h3 className="w-[35vh] text-start lg:w-[50vh]">
                    Your generosity has provided 1,200 meals to those in need,
                    making a tangible difference in our community and fostering
                    a healthier, more connected neighborhood. Thank you for your
                    continued support!
                  </h3>
                </div>
                <button className="w-[95%] h-[40px] bg-purple-600 mr-2 mt-3 rounded-[5px] cursor-pointer hover:bg-purple-700">
                  Edit Profile
                </button>
              </div>
            </div>
  )
}

export default DonorProfile