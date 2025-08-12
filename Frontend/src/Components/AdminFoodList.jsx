import React, { useState } from "react";
import { X, Trash2, MapPin, Clock, Package, Utensils } from 'lucide-react';

const AdminFoodList = () => {
  // <CHANGE> Added state for popup management
  const [selectedFood, setSelectedFood] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Sample data for 6 cards
  const foodList = [
    {
      id: 1,
      name: "Freshly Baked Bread",
      quantity: "200 Bread",
      type: "Vegetarian",
      status: "Available",
      address: "123 Main St, Anytown",
      // <CHANGE> Added additional details for popup
      description: "Fresh homemade bread baked this morning with organic ingredients",
      expiryDate: "2024-12-20",
      donorName: "City Bakery",
      contactNumber: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Rice & Curry",
      quantity: "50 Plates",
      type: "Vegetarian",
      status: "Available",
      address: "456 South Ave, Citytown",
      description: "Traditional South Indian rice with mixed vegetable curry",
      expiryDate: "2024-12-18",
      donorName: "Annapoorna Restaurant",
      contactNumber: "+91 98765 43211"
    },
    {
      id: 3,
      name: "Chicken Sandwich",
      quantity: "100 Sandwiches",
      type: "Non-Vegetarian",
      status: "Available",
      address: "789 North Rd, Villageton",
      description: "Grilled chicken sandwiches with fresh vegetables",
      expiryDate: "2024-12-19",
      donorName: "Quick Bites Cafe",
      contactNumber: "+91 98765 43212"
    },
    {
      id: 4,
      name: "Veg Salad",
      quantity: "30 Bowls",
      type: "Vegetarian",
      status: "Available",
      address: "22 Park Lane, Greenfield",
      description: "Fresh mixed vegetable salad with olive oil dressing",
      expiryDate: "2024-12-17",
      donorName: "Green Garden Restaurant",
      contactNumber: "+91 98765 43213"
    },
    {
      id: 5,
      name: "Milk Packets",
      quantity: "80 Packets",
      type: "Vegetarian",
      status: "Available",
      address: "11 Hill Street, Rivercity",
      description: "Fresh pasteurized milk packets from local dairy farm",
      expiryDate: "2024-12-22",
      donorName: "Sunrise Dairy",
      contactNumber: "+91 98765 43214"
    },
    {
      id: 6,
      name: "Fruit Basket",
      quantity: "40 Baskets",
      type: "Vegetarian",
      status: "Available",
      address: "7 Ocean Drive, Beachtown",
      description: "Assorted fresh seasonal fruits including apples, bananas, and oranges",
      expiryDate: "2024-12-21",
      donorName: "Fresh Fruits Market",
      contactNumber: "+91 98765 43215"
    },
  ];

  // <CHANGE> Added function to handle view details
  const handleViewDetails = (food) => {
    setSelectedFood(food);
  };

  // <CHANGE> Added function to handle delete
  const handleDelete = (foodId) => {
    setShowDeleteConfirm(true);
    // Delete logic would go here
    console.log("Deleting food item:", foodId);
  };

  // <CHANGE> Added function to close popup
  const closePopup = () => {
    setSelectedFood(null);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-full bg-[#1e293b] rounded-lg overflow-hidden shadow-lg">
      {/* Title Section */}
      <h1 className="w-full text-start text-[1.4rem] py-4 pl-3 text-purple-600 font-bold">
        🍽️ All Donated Food List
      </h1>

      <div className="w-full min-h-full flex p-6 flex-row items-start justify-start pl-10 flex-wrap gap-3">
        {foodList.map((food, index) => (
          <div
            key={index}
            className="w-[280px] h-[400px] bg-[#0f172a] flex flex-col rounded-[5px] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <img
              src="/placeholder.svg"
              alt=""
              className="w-full h-[150px] bg-[url('./assets/logo.png')] bg-cover bg-center rounded-t-[5px]"
            />
            <div className="w-full h-[250px] flex flex-col items-center justify-evenly rounded-b-[5px]">
              <div className="w-full h-[150px] flex flex-col items-start justify-evenly pl-5">
                <h1 className="text-[1.2rem] font-semibold">{food.name}</h1>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <Package size={14} />
                  Quantity : {food.quantity}
                </p>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <Utensils size={14} />
                  Type : {food.type}
                </p>
                <h3
                  className={`text-[1.1rem] font-medium ${
                    food.status === "Available" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {food.status}
                </h3>
                <p className="text-[#ffffffbc] text-[14px] flex items-center gap-1">
                  <MapPin size={14} />
                  {food.address}
                </p>
              </div>
              <div className="w-[90%] flex gap-2">
                <button 
                  onClick={() => handleViewDetails(food)}
                  className="flex-1 h-[35px] rounded-[5px] cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors duration-200 font-medium"
                >
                  View Details
                </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <CHANGE> Added popup modal for food details */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f172a] rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto border border-purple-500/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-purple-400">Food Details</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(selectedFood.id)}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full transition-colors"
                  title="Delete Food Item"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={closePopup}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="space-y-4 text-white">
              <div>
                <h3 className="text-lg font-semibold text-purple-300">{selectedFood.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{selectedFood.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Quantity</p>
                  <p className="text-white font-medium">{selectedFood.quantity}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-white font-medium">{selectedFood.type}</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <p className={`font-medium ${selectedFood.status === "Available" ? "text-green-400" : "text-red-400"}`}>
                  {selectedFood.status}
                </p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock size={14} />
                  Expiry Date
                </p>
                <p className="text-white font-medium">{selectedFood.expiryDate}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <MapPin size={14} />
                  Location
                </p>
                <p className="text-white font-medium">{selectedFood.address}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Donor</p>
                <p className="text-white font-medium">{selectedFood.donorName}</p>
                <p className="text-gray-300 text-sm">{selectedFood.contactNumber}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <CHANGE> Added delete confirmation popup */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f172a] rounded-lg p-6 max-w-sm w-full border border-red-500/20">
            <div className="text-center">
              <Trash2 className="mx-auto mb-4 text-red-400" size={48} />
              <h3 className="text-lg font-semibold text-white mb-2">Delete Food Item</h3>
              <p className="text-gray-300 mb-6">Are you sure you want to delete this food item? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Delete logic here
                    closePopup();
                  }}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFoodList;
