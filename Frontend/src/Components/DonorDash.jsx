import React from 'react'

const DonorDash = ({handleEasyAdd,handleVisitDonate}) => {
  return (
    <div className="w-full lg:w-[85%] h-auto p-4 lg:p-6 overflow-y-auto">
            {/* Header */}
            <h1 className="text-xl lg:text-2xl mb-4   text-purple-600 font-bold">
              Donar Dashboard
            </h1>

            {/* Impact Cards */}
            <div className="mb-8">
              <h2 className="text-lg lg:text-xl mb-4 font-semibold">
                Your Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    icon: "fa-kaaba",
                    title: "Total Food Posts",
                    value: "18",
                    desc: "Food Items shared by you",
                    color: "text-[#f9e90a]",
                  },
                  {
                    icon: "fa-bowl-food",
                    title: "Total Food Donated",
                    value: "350 kg",
                    desc: "Cumulative Weight of your donations",
                    color: "text-[#fe0b0b]",
                  },
                  {
                    icon: "fa-circle-check",
                    title: "Items Claimed",
                    value: "12",
                    desc: "Successful pickups by recipients",
                    color: "text-[#04d804]",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1e293b] p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <i
                      className={`fa-solid ${item.icon} text-xl lg:text-2xl mb-3 ${item.color}`}
                    ></i>
                    <h2 className="text-sm lg:text-base font-medium mb-1">
                      {item.title}
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                      {item.value}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-300 mb-3">
                      {item.desc}
                    </p>
                    <p className="text-right text-xs lg:text-sm text-blue-300 hover:underline cursor-pointer">
                      View details
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Quick Actions */}
              <div className="bg-[#1e293b] p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-lg lg:text-xl font-semibold mb-1">
                  Quick Actions
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  Perform common tasks instantly
                </p>
                <div className="space-y-3">
                  <div className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors" onClick={handleEasyAdd}>
                    <i className="fa-solid fa-circle-plus text-lg" />
                    <span className="text-sm lg:text-base">
                      Add New Food Post
                    </span>
                  </div>
                  <div className="border border-gray-600 hover:border-gray-500 p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors " onClick={handleVisitDonate}>
                    <i className="fa-solid fa-folder text-lg" />
                    <span className="text-sm lg:text-base">View My Posts</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-[#1e293b] p-4 lg:p-6 rounded-lg shadow-lg">
                <h2 className="text-lg lg:text-xl font-semibold mb-1">
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  Your latest interactions on ShareBite
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: "fa-circle-plus",
                      text: 'Posted "Fresh Vegetables" (10 kg)',
                      time: "5 minutes ago",
                      color: "text-[#f9e90a]",
                    },
                    {
                      icon: "fa-circle-check",
                      text: 'Post "Canned Goods" claimed',
                      time: "1 hour ago",
                      color: "text-[#04d804]",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-600 p-3 rounded-lg flex items-start gap-3"
                    >
                      <i
                        className={`fa-solid ${item.icon} pt-1 ${item.color} text-lg`}
                      ></i>
                      <div className="flex-1">
                        <h3 className="text-sm lg:text-base">{item.text}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Donors */}
            <div>
              <h2 className="text-lg lg:text-xl font-semibold mb-4">
                Top Donors This Month
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(2,37,78,1)_0%,_rgba(4,56,126,1)_19.7%,_rgba(85,245,221,1)_100.2%)] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm lg:text-base font-medium truncate">
                        Community Kitchen
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-300">
                        Donated: 1200kg
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default DonorDash