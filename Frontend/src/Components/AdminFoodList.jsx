import React from "react";

const AdminFoodList = () => {
  // Sample data for 6 cards
  const foodList = [
    {
      name: "Freshly Baked Bread",
      quantity: "200 Bread",
      type: "Vegetarian",
      status: "Available",
      address: "123 Main St, Anytown",
    },
    {
      name: "Rice & Curry",
      quantity: "50 Plates",
      type: "Vegetarian",
      status: "Available",
      address: "456 South Ave, Citytown",
    },
    {
      name: "Chicken Sandwich",
      quantity: "100 Sandwiches",
      type: "Non-Vegetarian",
      status: "Available",
      address: "789 North Rd, Villageton",
    },
    {
      name: "Veg Salad",
      quantity: "30 Bowls",
      type: "Vegetarian",
      status: "Available",
      address: "22 Park Lane, Greenfield",
    },
    {
      name: "Milk Packets",
      quantity: "80 Packets",
      type: "Vegetarian",
      status: "Available",
      address: "11 Hill Street, Rivercity",
    },
    {
      name: "Fruit Basket",
      quantity: "40 Baskets",
      type: "Vegetarian",
      status: "Available",
      address: "7 Ocean Drive, Beachtown",
    },
  ];

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
            className="w-[280px] h-[400px] bg-[#0f172a] flex flex-col rounded-[5px] text-white"
          >
            <img
              src=""
              alt=""
              className="w-full h-[150px] bg-[url('./assets/logo.png')] bg-cover bg-center rounded-t-[5px]"
            />
            <div className="w-full h-[250px] flex flex-col items-center justify-evenly rounded-b-[5px]">
              <div className="w-full h-[150px] flex flex-col items-start justify-evenly pl-5">
                <h1 className="text-[1.2rem]">{food.name}</h1>
                <p className="text-[#ffffffbc] text-[14px]">
                  Quantity : {food.quantity}
                </p>
                <p className="text-[#ffffffbc] text-[14px]">
                  Type : {food.type}
                </p>
                <h3
                  className={`text-[1.1rem] ${
                    food.status === "Available" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {food.status}
                </h3>
                <p className="text-[#ffffffbc] text-[14px]">{food.address}</p>
              </div>
              <div className="w-[90%] flex gap-2">
                <button className="flex-1 h-[35px] rounded-[5px] cursor-pointer bg-purple-600 hover:bg-purple-700">
                  View Details
                </button>
                <button className="flex-1 h-[35px] rounded-[5px] cursor-pointer bg-red-600 hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFoodList;
