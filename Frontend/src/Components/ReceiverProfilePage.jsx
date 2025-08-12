
import { useState } from "react"

const ReceiverProfilePage = () => {
  // State for popup visibility
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)

  // State for form fields
  const [formData, setFormData] = useState({
    receiverName: "Sarah Chen",
    receiverEmail: "sarah.chen@example.com",
    contactNo: "+1 (555) 123-4567",
    address: "123 Maple Street, Anytown, CA 90210",
  })

  // State for password change
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const claimedFoodHistory = [
    {
      foodItem: "Fresh Produce Box",
      donor: "Green Acres Farm",
      quantity: "5 lbs",
      claimDate: "2024-07-28",
      status: "Claimed",
    },
    {
      foodItem: "Baked Goods Assortment",
      donor: "Community Bakery",
      quantity: "1 dozen",
      claimDate: "2024-07-25",
      status: "Claimed",
    },
    {
      foodItem: "Vegetarian Lasagna",
      donor: "Healthy Kitchen",
      quantity: "2 servings",
      claimDate: "2024-07-22",
      status: "Pending",
    },
    {
      foodItem: "Canned Food Donation",
      donor: "Local Pantry",
      quantity: "10 items",
      claimDate: "2024-07-18",
      status: "Claimed",
    },
    {
      foodItem: "Excess Fruit Basket",
      donor: "Urban Gardeners",
      quantity: "3 lbs",
      claimDate: "2024-07-15",
      status: "Claimed",
    },
    {
      foodItem: "Homemade Soup",
      donor: "Elderly Neighbor",
      quantity: "1 quart",
      claimDate: "2024-07-10",
      status: "Cancelled",
    },
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case "Claimed":
        return "bg-green-100 text-green-700"
      case "Pending":
        return "bg-yellow-100 text-yellow-700"
      case "Cancelled":
        return "bg-red-100 text-red-700"
      default:
        return ""
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Profile updated:", formData)
    console.log("Password data:", passwordData)
    setIsEditPopupOpen(false)
  }

  const handleClosePopup = () => {
    setIsEditPopupOpen(false)
    // Reset password fields when closing
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="w-full mx-auto p-6 space-y-8">
      {/* Personal Info */}
      <div className="bg-[#1e293b] w-full h-[30%] rounded-lg shadow p-6 flex-col lg:flex-row flex items-center lg:items-start space-x-6">
        <div className="w-30 h-30 rounded-full bg-gray-200"></div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-600 text-center lg:text-start">{formData.receiverName}</h2>
          <p className="text-white text-center lg:text-start">{formData.receiverEmail}</p>
          <div className="mt-2 space-y-1 flex w-full flex-col lg:flex-row gp-2 lg:gap-4 items-center justify-start">
            <p className="flex items-center text-sm text-white">📧 {formData.receiverEmail}</p>
            <p className="flex items-center text-sm white">📍 {formData.address}</p>
            <p className="flex items-center text-sm text-white">📞 {formData.contactNo}</p>
          </div>
          <div className="w-full h-[20%] flex flex-row items-center justify-center lg:justify-start">
            <button
              onClick={() => setIsEditPopupOpen(true)}
              className="mt-4 px-4 py-2 border rounded-lg hover:bg-purple-600 cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Claimed Food History */}
      <div className="bg-[#1e293b] rounded-lg w-full shadow p-6 flex flex-col items-center justify-center pr-2 pl-1 lg:px-5">
        <h3 className="text-lg font-semibold mb-4 text-start w-full pl-2">Claimed Food History</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0f172a] text-[8px] lg:text-[1rem]">
              <th className="border p-3 text-left">Food Item</th>
              <th className="border p-3 text-left">Donor</th>
              <th className="border p-3 text-left">Quantity</th>
              <th className="border p-3 text-left">Claim Date</th>
              <th className="border p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {claimedFoodHistory.map((item, index) => (
              <tr key={index} className="hover:bg-purple-600 cursor-pointer text-[8px] lg:text-[1rem]">
                <td className="border p-3">{item.foodItem}</td>
                <td className="border p-3">{item.donor}</td>
                <td className="border p-3">{item.quantity}</td>
                <td className="border p-3">{item.claimDate}</td>
                <td className="border p-3">
                  <span
                    className={`lg:px-3 px-1 py-1 rounded-full lg:text-sm text-[8px] lg:font-bold ${getStatusClass(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1e293b]  rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-600">Edit Profile</h2>
                <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Profile Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b pb-2">Profile Information</h3>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Receiver Name</label>
                    <input
                      type="text"
                      name="receiverName"
                      value={formData.receiverName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Receiver Email</label>
                    <input
                      type="email"
                      name="receiverEmail"
                      value={formData.receiverEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      required
                    />
                  </div>
                </div>

                {/* Change Password Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b pb-2">Change Password</h3>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Old Password</label>
                    <input
                      type="password"
                      name="oldPassword"
                      value={passwordData.oldPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClosePopup}
                    className="flex-1 px-4 py-2 border border-gray-300 text-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReceiverProfilePage
