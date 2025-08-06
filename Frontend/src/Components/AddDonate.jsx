import React from 'react'

const AddDonate = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1e293b] rounded-lg overflow-hidden shadow-lg">
              {/* Image section */}
              <div className="w-full lg:w-1/2 h-48 sm:h-60 lg:h-auto bg-[url('./assets/img1.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white p-4 lg:p-6">
                <h1 className="text-xl lg:text-2xl font-bold text-center mb-2">
                  Share a Meal, Share Hope
                </h1>
                <p className="text-center text-sm lg:text-base">
                  Your contribution helps nourish communities and reduce food
                  waste. Every post makes a difference.
                </p>
              </div>

              {/* Form */}
              <div className="w-full lg:w-1/2 p-4 lg:p-6">
                <h1 className="text-lg lg:text-xl mb-4 lg:mb-6  text-purple-600 font-bold">
                  Add Food Post
                </h1>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Food Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g.. Freshly baked bread"
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description of Food
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Describe the food..."
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors resize-vertical"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g.. 5kg"
                        className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Food Type
                      </label>
                      <input
                        type="text"
                        placeholder="veg or non-veg"
                        className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g.. +123 455 7850"
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Food Image
                    </label>
                    <input
                      type="file"
                      className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                    />
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1e293b]">
                    Post Food
                  </button>
                </form>
              </div>
            </div>
  )
}

export default AddDonate