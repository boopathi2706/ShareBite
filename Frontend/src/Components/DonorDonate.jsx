import React, { useState } from 'react'
import { X, Edit3, Calendar, MapPin, Utensils } from 'lucide-react'
import img from "../assets/Logo.png";

const DonorDonate = () => {
  // <CHANGE> Added state for popup and editing functionality
  const [selectedFood, setSelectedFood] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({})

  // Sample food data - in real app this would come from props or API
  const foodItems = [
    {
      id: 1,
      name: "Freshly Baked Bread",
      description: "Soft and warm bread baked fresh this morning with organic ingredients",
      quantity: "200 Bread",
      type: "Vegetarian",
      status: "Available",
      location: "123 Main St, Anytown",
      expiredDate: "2024-01-15",
      image: img
    },
    {
      id: 2,
      name: "Mixed Vegetable Curry",
      description: "Nutritious curry made with fresh seasonal vegetables and aromatic spices",
      quantity: "50 Servings",
      type: "Vegetarian",
      status: "Available",
      location: "456 Oak Ave, Downtown",
      expiredDate: "2024-01-14",
      image: img,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken and traditional spices",
      quantity: "30 Portions",
      type: "Non-Vegetarian",
      status: "Available",
      location: "789 Pine St, Uptown",
      expiredDate: "2024-01-13",
      image: img,
    },
     {
      id: 3,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken and traditional spices",
      quantity: "30 Portions",
      type: "Non-Vegetarian",
      status: "Available",
      location: "789 Pine St, Uptown",
      expiredDate: "2024-01-13",
      image: img,
    }
  ]

  const openPopup = (food) => {
    setSelectedFood(food)
    setEditForm(food)
    setIsEditing(false)
  }

  const closePopup = () => {
    setSelectedFood(null)
    setIsEditing(false)
    setEditForm({})
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // In real app, this would update the backend
    console.log('Saving changes:', editForm)
    setSelectedFood(editForm)
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="flex flex-col items-center w-full min-h-full bg-[#1e293b] rounded-lg overflow-hidden shadow-lg">
      {/* ... existing code ... */}
      <h1 className="w-full text-start text-[1.3rem] py-4 pl-3 text-purple-600 font-bold">
        Your Donated Food
      </h1>

      <div className="w-full min-h-full flex p-6 flex-row items-start justify-start pl-10 flex-wrap gap-3">
        {/* <CHANGE> Updated food cards to use dynamic data and improved styling */}
        {foodItems.map((food) => (
          <div key={food.id} className="w-[280px] h-[400px] bg-[#0f172a] flex flex-col rounded-lg text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img
              src={food.image || "/placeholder.svg"}
              alt={food.name}
              className="w-full h-[150px] object-cover rounded-t-lg"
            />
            <div className="w-full h-[250px] flex flex-col items-center justify-evenly rounded-b-lg p-4">
              <div className="w-full h-[150px] flex flex-col items-start justify-evenly">
                <h1 className="text-[1.2rem] font-semibold text-white">{food.name}</h1>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <Utensils size={14} />
                  Quantity: {food.quantity}
                </p>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${food.type === 'Vegetarian' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  Type: {food.type}
                </p>
                <h3 className="text-[1.1rem] text-green-500 font-medium">{food.status}</h3>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <MapPin size={14} />
                  {food.location}
                </p>
              </div>
              <button 
                onClick={() => openPopup(food)}
                className="w-[90%] h-[35px] rounded-lg cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors duration-200 font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <CHANGE> Added popup modal for food details and editing */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f172a] rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto border border-purple-500/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-400">Food Details</h2>
              <button 
                onClick={closePopup}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <img
                src={selectedFood.image || "/placeholder.svg"}
                alt={selectedFood.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Food Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-2 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea
                      value={editForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                      className="w-full p-2 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Food Type</label>
                    <select
                      value={editForm.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      className="w-full p-2 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full p-2 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Expired Date</label>
                    <input
                      type="date"
                      value={editForm.expiredDate}
                      onChange={(e) => handleInputChange('expiredDate', e.target.value)}
                      className="w-full p-2 bg-[#1e293b] border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={handleSave}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{selectedFood.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedFood.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Utensils size={16} className="text-purple-400" />
                      <span className="text-gray-300">Quantity: {selectedFood.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${selectedFood.type === 'Vegetarian' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className="text-gray-300">{selectedFood.type}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-400" />
                      <span className="text-gray-300">{selectedFood.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400" />
                      <span className="text-gray-300">Expires: {selectedFood.expiredDate}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleEdit}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <Edit3 size={16} />
                      Edit Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DonorDonate
