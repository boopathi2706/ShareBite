// Settings.jsx
import React, { useState } from "react";

const Settings=() =>{
  const [serverOn, setServerOn] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  const handleChangePassword = () => {
    if (!currentPass || !newPass || !confirmPass) {
      alert("⚠️ Please fill in all password fields!");
      return;
    }
    if (newPass !== confirmPass) {
      alert("❌ New password and confirm password do not match!");
      return;
    }
    alert("🔑 Password changed successfully!");
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div
      className={`min-h-screen min-w-full flex items-center justify-center p-6 rounded-[10px] ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#1e293b] text-gray-800"
      }`}
    >
      <div className="text-white w-full h-[80%] bg-white dark:bg-[#0f172a] rounded-2xl shadow-lg p-6 transition duration-300 ease-in-out">

        {/* Server Control */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-medium">Server Status</span>
          <button
            onClick={() => setServerOn(!serverOn)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              serverOn
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {serverOn ? "ON" : "OFF"}
          </button>
        </div>

        {/* Maintenance Mode */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-medium">Maintenance Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={maintenanceMode}
              onChange={() => setMaintenanceMode(!maintenanceMode)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative transition-all">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  maintenanceMode ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-medium">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-gray-700 relative transition-all">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  darkMode ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Change Password Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">🔑 Change Admin Password</h2>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            onClick={handleChangePassword}
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
          >
            Change Password
          </button>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            onClick={handleSave}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            💾 Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
export default Settings;