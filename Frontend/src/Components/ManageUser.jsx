import React from "react";

const ManageUsers = () => {
  const users = [
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Donor",
      status: "Active",
      dateJoined: "2023-01-15",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Alex Smith",
      email: "alex.smith@example.com",
      role: "Receiver",
      status: "Active",
      dateJoined: "2023-02-20",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      role: "Donor",
      status: "Suspended",
      dateJoined: "2023-03-10",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      name: "Kevin White",
      email: "kevin.white@example.com",
      role: "Receiver",
      status: "Pending",
      dateJoined: "2023-04-05",
      avatar: "https://i.pravatar.cc/40?img=5",
    },

    {
      name: "Chloe Harris",
      email: "chloe.harris@example.com",
      role: "Donor",
      status: "Active",
      dateJoined: "2023-01-25",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    {
      name: "Jacob Miller",
      email: "jacob.miller@example.com",
      role: "Receiver",
      status: "Active",
      dateJoined: "2023-03-01",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500 text-white";
      case "Suspended":
        return "bg-red-500 text-white";
      case "Pending":
        return "bg-yellow-400 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Donor":
        return "bg-orange-500 text-white";
      case "Receiver":
        return "bg-purple-600 text-white";
      
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="p-6  bg-[#1e293b]  rounded-lg shadow-md w-full  text-white">
      <h1 className="text-[1.4rem] font-bold mb-4 text-purple-600">🗂️ Manage Users</h1>

      <div className="flex gap-2 mb-4 flex-col lg:flex-row  ">
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="border border-gray-300 text-white rounded px-4 py-2 flex-1 "
        />
        <select className="border border-gray-300 rounded px-2 py-3 pr-4  ">
          <option className="text-black">Filter by Role</option>
           <option className="text-black">Donor</option>
            <option className="text-black">Receiver</option>
        </select>
        <select className="border border-gray-300 rounded px-2 py-2 pr-4 ">
          <option className="text-black">Filter by Status</option>
           <option className="text-black">All Status</option>
            <option className="text-black">Active</option>
            <option className="text-black">Banned</option>
            <option className="text-black">Suspended</option>
        </select>
      </div>

      <table className="w-full border-collapse ">
        <thead className="rounded">
          <tr className=" bg-[#0f172a]  ">
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem] ">User</th>
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem]">Email</th>
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem]">Role</th>
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem]">Status</th>
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem]">Date Joined</th>
            <th className="p-2 lg:p-3 text-left text-[10px] lg:text-[1rem]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="lg:p-3 flex items-center gap-1 lg:gap-2 text-[7px] lg:text-[1rem]">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-4 h-4 lg:w-8 lg:h-8 rounded-full"
                />
                {user.name}
              </td>
              <td className="lg:p-1 text-[7px] lg:text-[1rem]">{user.email}</td>
              <td className="p-1 lg:p-3">
                <span
                  className={`px-1 py-1 lg:px-2 rounded text-sm text-[7px] lg:text-[1rem] ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="p-1 lg:p-3">
                <span
                  className={`px-1 py-1 lg:px-2 rounded text-sm text-[7px] lg:text-[1rem] ${getStatusColor(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>
              <td className=" lg:p-3 text-[7px] lg:text-[1rem]">{user.dateJoined}</td>
              <td className="lg:p-3 flex gap-1 lg:gap-3 text-[7px] lg:text-[1rem]">
                <button className="text-red-500 hover:text-red-700 cursor-pointer ">🗑 Delete</button>
                <button className="text-yellow-500 hover:text-yellow-700 cursor-pointer">🚫 Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 gap-2">
        <button className="lg:px-3 lg:py-1 px-2  border rounded">1</button>
        <button className="lg:px-3 lg:py-1 px-2  border rounded">2</button>
        <button className="lg:px-3 lg:py-1  px-2  border rounded">3</button>
      </div>
    </div>
  );
};

export default ManageUsers;
