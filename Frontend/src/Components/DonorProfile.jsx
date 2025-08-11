import React, { useState } from 'react'

const DonorProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  
  // Profile data state
  const [profileData, setProfileData] = useState({
    fullName: 'Boopathi',
    email: 'boopathi.v2023cse@sece.ac.in',
    phone: '+91 7010868772',
    address: '1/101 Thimmachur road, Sp puram',
    city: 'Kallakurichi',
    state: 'Tamil nadu',
    zipCode: '605 751',
    donationCategory: 'Vegetarian'
  })

  // Feedback form state
  const [reportData, setReportData] = useState({
    receiverId: '',
    complaint: ''
  })

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleReportChange = (field, value) => {
    setReportData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Profile saved:', profileData)
  }

  const handleSubmitFeedback = () => {
    // Here you would typically submit report to backend
    console.log('Report submitted:', reportData)
    setReportData({ receiverId: '', complaint: '' })
    setShowReportModal(false)
    alert('Report submitted successfully!')
  }

  const handleLogout = () => {
    // Handle logout logic here
    if (window.confirm('Are you sure you want to logout?')) {
      console.log('User logged out')
      // Redirect to login page or clear session
    }
  }

  const renderField = (label, field, value, type = 'text') => (
    <div className="w-full h-[65px] flex flex-col items-center justify-center gap-1">
      <h2 className="text-start w-[90%]">{label}</h2>
      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 bg-[#475569] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">
          {value}
        </div>
      )}
    </div>
  )

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-full bg-[#334155] rounded-lg overflow-hidden shadow-lg lg:flex-row">
        <div className="w-[90%] h-[94vh] flex flex-col items-start justify-evenly lg:w-[50%]">
          <h1 className="text-[1.5rem] pl-4 text-purple-600 font-bold">
            Personal Information
          </h1>

          {renderField('Full Name', 'fullName', profileData.fullName)}
          {renderField('Email Address', 'email', profileData.email, 'email')}
          {renderField('Phone Number', 'phone', profileData.phone, 'tel')}
          {renderField('Street Address', 'address', profileData.address)}
          {renderField('City', 'city', profileData.city)}
          {renderField('State/Province', 'state', profileData.state)}
          {renderField('Zip/Postal Code', 'zipCode', profileData.zipCode)}

          <div className="w-full h-[60px] flex flex-col items-center justify-center">
            <h2 className="text-start w-[90%]">Preferred Donation Categories</h2>
            {isEditing ? (
              <select
                value={profileData.donationCategory}
                onChange={(e) => handleInputChange('donationCategory', e.target.value)}
                className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 bg-[#475569] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Mixed">Mixed</option>
              </select>
            ) : (
              <div className="w-[90%] h-[35px] border-1 rounded-[5px] pl-3 flex flex-row items-center justify-start text-[#ffffffb2]">
                {profileData.donationCategory}
              </div>
            )}
          </div>
        </div>

        <div className="w-[90%] h-[94vh] flex flex-col items-center justify-start pl-5 lg:w-[50%]">
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
          
          <div className="w-[95%] flex flex-col gap-3 mt-3">
            {isEditing ? (
              <div className="flex gap-2">
                <button 
                  onClick={handleSaveProfile}
                  className="flex-1 h-[40px] bg-green-600 rounded-[5px] cursor-pointer hover:bg-green-700 text-white font-medium"
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="flex-1 h-[40px] bg-gray-600 rounded-[5px] cursor-pointer hover:bg-gray-700 text-white font-medium"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="w-full h-[40px] bg-purple-600 rounded-[5px] cursor-pointer hover:bg-purple-700 text-white font-medium"
              >
                Edit Profile
              </button>
            )}
            
            <button 
              onClick={() => setShowReportModal(true)}
              className="w-full h-[40px] bg-blue-600 rounded-[5px] cursor-pointer hover:bg-blue-700 text-white font-medium"
            >
              Report
            </button>
            
            <button 
              onClick={handleLogout}
              className="w-full h-[40px] bg-red-600 rounded-[5px] cursor-pointer hover:bg-red-700 text-white font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#334155] rounded-lg p-6 w-[90%] max-w-md mx-4">
            <h2 className="text-xl font-bold text-purple-600 mb-4">Submit Report</h2>
            
            <div className="mb-4">
              <label className="block text-white mb-2">Receiver ID</label>
              <input
                type="text"
                value={reportData.receiverId}
                onChange={(e) => handleReportChange('receiverId', e.target.value)}
                placeholder="Enter receiver ID"
                className="w-full h-[40px] border-1 rounded-[5px] pl-3 bg-[#475569] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white mb-2">Report/Complaint</label>
              <textarea
                value={reportData.complaint}
                onChange={(e) => handleReportChange('complaint', e.target.value)}
                placeholder="Enter your report or complaint"
                rows="4"
                className="w-full border-1 rounded-[5px] p-3 bg-[#475569] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleSubmitFeedback}
                disabled={!reportData.receiverId || !reportData.complaint}
                className="flex-1 h-[40px] bg-green-600 rounded-[5px] cursor-pointer hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-medium"
              >
                Submit
              </button>
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 h-[40px] bg-gray-600 rounded-[5px] cursor-pointer hover:bg-gray-700 text-white font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DonorProfile
