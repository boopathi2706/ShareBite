
import React from "react";
import { useState,useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminAnalytics = () => {
    const [barThickness, setBarThickness] = useState(50); // default desktop

  // Detect screen size
  useEffect(() => {
    const updateBarThickness = () => {
      if (window.innerWidth < 768) { // mobile breakpoint
        setBarThickness(15);
      } else {
        setBarThickness(50);
      }
    };

    updateBarThickness(); // run once at start
    window.addEventListener("resize", updateBarThickness);
    return () => window.removeEventListener("resize", updateBarThickness);
  }, []);
    const lineData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Registered Users Last Year",
        data: [50, 70, 65, 90, 110, 85, 130, 120, 150, 170, 160, 180],
        borderColor: "#9333ea",
        backgroundColor: "#fff",
        tension: 0.3
      }
    ]
  };

  // 📊 Bar chart data
  const barData = {
   labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Total Food Saved (kg) Last Year",
      data: [50, 70, 65, 90, 110, 85, 130, 120, 150, 170, 160, 180],
        backgroundColor: "#9333ea",
         barThickness: barThickness,
          borderRadius: 3
      }
    ]
  };

  // 📊 Pie chart data
  const pieData = {
    labels: ["Banned", "Suspended", "Active"],
    datasets: [
      {
        data: [5, 8, 50],
        backgroundColor: [
          "#FF2E63", // red
          "#00ADB5", // orange
          "#9333ea"  // green
        ]
      }
    ]
  };
  return (
     <div className='w-full h-[750px] lg:min-h-[95%] bg-[#1e293b] flex flex-col gap-3 items-center justify-center rounded-[10px]'>
                              <div className='w-[95%] h-[200px] lg:h-[50%]  bg-[#0f172a] flex items-center justify-center p-3 rounded-[5px]'>
                              <Bar style={{width:"100%", cursor: "pointer"}} data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: "white" } } }, scales: { x: { ticks: { color: "white" } }, y: { ticks: { color: "white" } } } }} />
                              </div>
                              <div className='w-full h-[500px] lg:h-[45%] flex flex-col lg:flex-row gap-3 items-center justify-center '>
                                <div className='w-[95%] lg:w-[59%] h-[200px] lg:h-[95%] bg-[#0f172a] flex items-center p-3 rounded-[5px]'>
                                 <Line style={{width:"100%", cursor: "pointer"}} data={lineData} options={{ responsive: true,maintainAspectRatio: false, plugins: { legend: { labels: { color: "white" } } }, scales: { x: { ticks: { color: "white" } }, y: { ticks: { color: "white" } } } }} />

                                </div>
                                <div className='w-[95%] lg:w-[35%] h-[300px] lg:h-[95%] bg-[#0f172a] flex items-center justify-center p-3 rounded-[5px]'>
                                    <Pie style={{width:"80%", height:"80%", cursor: "pointer"}} data={pieData} options={{  responsive: true,maintainAspectRatio: false, plugins: { legend: { labels: { color: "white" } } } }} />
                                </div>
                              </div>
    </div>
  )
}

export default AdminAnalytics