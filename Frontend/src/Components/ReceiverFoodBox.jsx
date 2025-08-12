

import { useState } from "react"
import img from "../assets/Logo.png"

const ReceiverFoodBox = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foodType, setFoodType] = useState("all") // 'all', 'veg', 'non-veg'
  const [distanceRange, setDistanceRange] = useState(25) // Default 25km
  const [showDetailsPopup, setShowDetailsPopup] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)

  const foodItems = [
    {
      id: 1,
      name: "Freshly Baked Bread",
      quantity: "200 Bread",
      type: "Vegetarian",
      description: "Fresh homemade bread baked this morning with organic ingredients. Perfect for families in need.",
      expiryTime: "2 hours remaining",
      ownerName: "Sarah's Bakery",
      location: "123 Main St, Anytown",
      distance: "2.5 km",
      image: img,
      whatsappNumber: "+1234567890",
      status: "Available",
    },
    {
      id: 2,
      name: "Vegetable Curry & Rice",
      quantity: "15 servings",
      type: "Vegetarian",
      description: "Nutritious vegetable curry with basmati rice. Made with fresh vegetables and aromatic spices.",
      expiryTime: "4 hours remaining",
      ownerName: "Green Garden Restaurant",
      location: "456 Oak Avenue, Downtown",
      distance: "1.8 km",
      image: img,
      whatsappNumber: "+1234567891",
      status: "Available",
    },
    {
      id: 3,
      name: "Grilled Chicken Meals",
      quantity: "20 portions",
      type: "Non-Vegetarian",
      description: "Grilled chicken breast with roasted vegetables and mashed potatoes. High protein healthy meal.",
      expiryTime: "3 hours remaining",
      ownerName: "City Grill House",
      location: "789 Pine Street, Uptown",
      distance: "3.2 km",
      image: img,
      whatsappNumber: "+1234567892",
      status: "Available",
    },
    {
      id: 4,
      name: "Fresh Fruit Salad",
      quantity: "30 cups",
      type: "Vegetarian",
      description:
        "Mixed seasonal fruits including apples, oranges, grapes, and berries. Rich in vitamins and minerals.",
      expiryTime: "6 hours remaining",
      ownerName: "Healthy Bites Cafe",
      location: "321 Elm Road, Westside",
      distance: "4.1 km",
      image: img,
      whatsappNumber: "+1234567893",
      status: "Available",
    },
    {
      id: 5,
      name: "Pasta with Meat Sauce",
      quantity: "25 servings",
      type: "Non-Vegetarian",
      description: "Homemade pasta with rich meat sauce, topped with parmesan cheese. Comfort food at its best.",
      expiryTime: "5 hours remaining",
      ownerName: "Mama's Italian Kitchen",
      location: "654 Maple Drive, Eastside",
      distance: "2.9 km",
      image: img,
      whatsappNumber: "+1234567894",
      status: "Available",
    },
  ]

  const openDetailsPopup = (food) => {
    setSelectedFood(food)
    setShowDetailsPopup(true)
  }

  const closeDetailsPopup = () => {
    setShowDetailsPopup(false)
    setSelectedFood(null)
  }

  const contactViaWhatsApp = (phoneNumber, foodName) => {
    const message = `Hi! I'm interested in claiming the "${foodName}" donation. Is it still available?`
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col items-center w-full min-h-full bg-[#1e293b] rounded-lg overflow-auto shadow-lg">
      {/* Title Section */}
      <h1 className="w-full text-start text-[1.3rem] py-4 pl-3 text-purple-600 font-bold">Donated Food List</h1>

      <div className="w-full px-6 pb-4">
        <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-slate-700">
          {/* Search Box */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for food items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1e293b] text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-12 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filter Controls Row */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Veg/Non-Veg Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-3">Food Type</label>
              <div className="flex bg-[#1e293b] rounded-lg p-1 border border-slate-600">
                <button
                  onClick={() => setFoodType("all")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    foodType === "all"
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFoodType("veg")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    foodType === "veg"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  🥬 Vegetarian
                </button>
                <button
                  onClick={() => setFoodType("non-veg")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    foodType === "non-veg"
                      ? "bg-red-600 text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  🍖 Non-Veg
                </button>
              </div>
            </div>

            {/* Distance Range Slider */}
            <div className="flex-1 w-full lg:w-auto">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Distance Range: <span className="text-purple-400 font-semibold">{distanceRange}km</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={distanceRange}
                  onChange={(e) => setDistanceRange(e.target.value)}
                  className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #9333ea 0%, #9333ea ${((distanceRange - 5) / 45) * 100}%, #1e293b ${((distanceRange - 5) / 45) * 100}%, #1e293b 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>5km</span>
                  <span>50km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || foodType !== "all" || distanceRange !== 25) && (
            <div className="mt-4 pt-4 border-t border-slate-700">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-400">Active filters:</span>
                {searchTerm && (
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                    Search: "{searchTerm}"
                  </span>
                )}
                {foodType !== "all" && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm border ${
                      foodType === "veg"
                        ? "bg-green-600/20 text-green-300 border-green-600/30"
                        : "bg-red-600/20 text-red-300 border-red-600/30"
                    }`}
                  >
                    {foodType === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </span>
                )}
                {distanceRange !== 25 && (
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                    Within {distanceRange}km
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setFoodType("all")
                    setDistanceRange(25)
                  }}
                  className="text-gray-400 hover:text-white text-sm underline ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Food Cards Grid */}
      <div className="w-full min-h-full flex flex-row items-start justify-start pl-10 flex-wrap gap-4  ">
        {foodItems.map((food) => (
          <div key={food.id} className="w-[280px] h-[400px] bg-[#0f172a] flex flex-col rounded-[5px] text-white transition duration-100 ease-in transform hover:scale-[1.02]">
            <img
              src={food.image || "../assets/Logo.png"}
              alt={food.name}
              className="w-full h-[150px] object-cover rounded-t-[5px]"
            />
            <div className="w-full h-[250px] flex flex-col items-center justify-evenly rounded-b-[5px]">
              <div className="w-full h-[150px] flex flex-col items-start justify-evenly pl-5">
                <h1 className="text-[1.2rem]">{food.name}</h1>
                <p className="text-[#ffffffbc] text-[14px]">Quantity: {food.quantity}</p>
                <p className="text-[#ffffffbc] text-[14px]">Type: {food.type}</p>
                <h3 className="text-[1.1rem] text-green-500">{food.status}</h3>
                <p className="text-[#ffffffbc] text-[14px]">{food.location}</p>
              </div>
              <button
                onClick={() => openDetailsPopup(food)}
                className="w-[90%] h-[35px] rounded-[5px] cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {showDetailsPopup && selectedFood && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f172a] rounded-2xl max-w-4xl w-full max-h-[94vh] overflow-y-auto border border-slate-700 shadow-2xl">
            {/* Popup Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">Food Details</h2>
              <button
                onClick={closeDetailsPopup}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Popup Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Food Details */}
                <div className="space-y-6">
                  {/* Food Name */}
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedFood.name}</h3>
                      <p className="text-gray-400">Quantity: {selectedFood.quantity}</p>
                    </div>
                  </div>

                  {/* Food Type */}
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold">Food Type</p>
                      <p
                        className={`text-sm ${selectedFood.type === "Vegetarian" ? "text-green-400" : "text-orange-400"}`}
                      >
                        {selectedFood.type}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold">Description</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedFood.description}</p>
                    </div>
                  </div>

                  {/* Expiry Time */}
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold">Expiry Time</p>
                      <p className="text-red-400 text-sm font-medium">{selectedFood.expiryTime}</p>
                    </div>
                  </div>

                  {/* Owner Name */}
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold">Donated by</p>
                      <p className="text-yellow-400 text-sm">{selectedFood.ownerName}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pink-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-300 text-sm">{selectedFood.location}</p>
                      <p className="text-pink-400 text-sm">Distance: {selectedFood.distance}</p>
                    </div>
                  </div>

                  {/* Claim Button with WhatsApp */}
                  <div className="pt-4">
                    <button
                      onClick={() => contactViaWhatsApp(selectedFood.whatsappNumber, selectedFood.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Claim via WhatsApp
                    </button>
                  </div>
                </div>

                {/* Right Side - Food Image */}
                <div className="lg:order-last">
                  <div className="sticky top-6">
                    <img
                      src={selectedFood.image || "/placeholder.svg"}
                      alt={selectedFood.name}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="mt-4 p-4 bg-[#1e293b] rounded-xl border border-slate-600">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-semibold flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          {selectedFood.status}
                        </span>
                        <span className="text-gray-400 text-sm">{selectedFood.distance} away</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReceiverFoodBox
