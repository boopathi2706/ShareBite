
import React, { useEffect, useRef } from 'react'

const ReceiverDash = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const initMap = async () => {
      if (typeof window !== 'undefined' && mapRef.current) {
        const L = (await import('leaflet')).default
        
        // Import Leaflet CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)

        // <CHANGE> Initialize Leaflet map focused on Tamil Nadu
        const map = L.map(mapRef.current).setView([11.1271, 78.6569], 7)

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        // Tamil Nadu cities with coordinates and info
        const cities = [
          { name: 'Chennai', lat: 13.0827, lng: 80.2707, items: 15 },
          { name: 'Coimbatore', lat: 11.0168, lng: 76.9558, items: 8 },
          { name: 'Madurai', lat: 9.9252, lng: 78.1198, items: 12 },
          { name: 'Tiruchirappalli', lat: 10.7905, lng: 78.7047, items: 6 },
          { name: 'Salem', lat: 11.6643, lng: 78.1460, items: 4 },
          { name: 'Tirunelveli', lat: 8.7139, lng: 77.7567, items: 3 },
          { name: 'Vellore', lat: 12.9165, lng: 79.1325, items: 2 }
        ]

        // Custom marker icon
        const customIcon = L.divIcon({
          html: `<div style="
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            animation: pulse 2s infinite;
          "></div>
          <style>
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); }
            }
          </style>`,
          className: 'custom-marker',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })

        // Add markers for each city
        cities.forEach(city => {
          const marker = L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map)
          marker.bindPopup(`
            <div style="color: #1e293b; font-weight: bold;">
              <h3 style="margin: 0; color: #8b5cf6;">${city.name}</h3>
              <p style="margin: 5px 0;">Available Items: ${city.items}</p>
            </div>
          `)
        })

        // Cleanup function
        return () => {
          map.remove()
        }
      }
    }

    initMap()
  }, [])

  return (
    <div className="p-6  bg-[#1e293b]  rounded-lg shadow-md min-h-full w-full  text-white flex flex-col">
      <h1 className="font-bold text-[1.4rem] text-purple-600 mb-5">📈 Receiver Dashboard</h1>
      <div className="w-full h-[600px] lg:h-[95%] flex flex-col justify-between items-center">
        {/* <CHANGE> Replaced "map loading..." with Leaflet map container */}
        <div className="w-[90%] h-[250px] lg:h-[70%] bg-[#0f172a] rounded-[5px] overflow-hidden z-1">
          <div ref={mapRef} className="w-full h-full rounded-[5px]" />
        </div>

        <div className="w-[90%] h-[330px] lg:h-[25%]  flex flex-col lg:flex-row items-center justify-evenly">
          <div className="w-full lg:w-[30%] h-[100px] lg:h-[90%] bg-[#0f172a] flex flex-col items-center justify-evenly rounded-[5px]">
            <div className="w-full h-[30%]  flex flex-row items-center justify-between px-4">
              <h2 className="text-[1.2rem]">Total Items Available</h2>
              <i className="fa-solid fa-box text-pink-500"></i>
            </div>
            <h1 className="lg:text-[2.4rem] text-[2rem] pl-4 w-full text-start">50</h1>
          </div>

          <div className="w-full lg:w-[30%] h-[100px] lg:h-[90%] bg-[#0f172a] flex flex-col items-center justify-evenly rounded-[5px]">
            <div className="w-full h-[30%]  flex flex-row items-center justify-between px-4">
              <h2 className="text-[1.2rem]">Recently Added Items</h2>
              <i className="fa-solid fa-repeat text-yellow-300"></i>
            </div>
            <h1 className="lg:text-[2.4rem] text-[2rem] pl-4 w-full text-start">05</h1>
          </div>

          <div className="w-full lg:w-[30%] h-[100px] lg:h-[90%] bg-[#0f172a] flex flex-col items-center justify-evenly rounded-[5px]">
            <div className="w-full h-[30%]  flex flex-row items-center justify-between px-4">
              <h2 className="text-[1.2rem]">Claimed This Week</h2>
              <i className="fa-solid fa-handshake text-green-500"></i>
            </div>
            <h1 className="lg:text-[2.4rem] text-[2rem] pl-4 w-full text-start">20</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiverDash
