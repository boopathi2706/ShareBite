import React from 'react'
import { Bar } from 'react-chartjs-2';

const AdminDash = () => {
      
      const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Users',
        data: [180, 310, 250, 70, 200, 200, 240],
        backgroundColor: '#9333ea', // Tailwind's green-500
        borderRadius: 6,
        Colors: 'white',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio:true,
    plugins: {
      title: {
        display: true,
        font: {
          size: 20,
          weight: 'bold',
          Colors: 'white',
        },
      },
      legend: {
        display: false,
         Colors: 'white',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 320,
        ticks: {
          stepSize: 80,
        },
      },
    },
  };
  return (
    <div className="w-full lg:w-[85%] min-h-screen p-4 lg:p-6 flex flex-col items-center justify-evenly gap-4 ">
                <h1 className='text-start w-full text-[1.4rem] font-bold text-purple-600'>🖥️ Admin Dashboard</h1>
              
              {/* report boxes */}
                <div className='w-full min-h-[440px] bg bg-[#1e293b] flex flex-row flex-wrap items-center justify-center gap-4 pt-[15px] rounded-[10px]'>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Total Users</h1>
                            <i className="fa-solid fa-users text-orange-400 text-[1.2rem]"></i>
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            12,450
                        </div>
                        <div>
                            <h2>Platform users (donors + receivers)</h2>
                        </div> </div>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Food Saved (kg)</h1>
                            <i className="fa-solid fa-box-archive text-yellow-300 text-[1.2rem]"></i>
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            5820
                        </div>
                        <div>
                            <h2>Total Food rescued from Waste</h2>
                        </div>
                      </div>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Active Donors</h1>
                            <i className="fa-solid fa-heart text-red-500 text-[1.2rem]"></i>
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            1,890
                        </div>
                        <div>
                            <h2>Donars active in the lats 30 days</h2>
                        </div>
                      </div>
    
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Total Food Posts</h1>
                           <i className="fa-solid fa-calendar-days text-green-400 text-[1.2rem]"></i>
                            
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            7,105
                        </div>
                        <div>
                            <h2>All food listing created on platform</h2>
                        </div>
                      </div>
    
                       <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Pending Posts</h1>
                           <i className="fa-solid fa-clock text-[1.2rem] text-blue-500"></i>
                            
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            12
                        </div>
                        <div className='w-full flex items-start justify-start p-3'>
                            <h2>Posts Awaiting moderation</h2>
                        </div>
                      </div>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Banned Users</h1>
                           <i className="fa-solid fa-ban text-[1.2rem] text-pink-500"></i>
                            
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            7
                        </div>
                       <div className='w-full flex items-start justify-start p-3'>
                            <h2>Users are banned in platform</h2>
                        </div>
                      </div>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Report Solved</h1>
                           <i className="fa-solid fa-circle-check text-[1.2rem] text-blue-700"></i>
                            
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            70
                        </div>
                       <div className='w-full flex items-start justify-start p-3'>
                            <h2>Issues successfully addressed</h2>
                        </div>
                      </div>
    
                      <div className='w-[270px] h-[180px] rounded-[5px] bg-[#0f172a] flex flex-col items-center justify-center mb-3'>
                        <div className='w-full h-[20%] flex flex-row items-center justify-between pl-3 pr-4 pb-2'>
                            <h1 className='text-[1.2rem]'>Report Count</h1>
                          <i className="fa-solid fa-flag text-[1.2rem] text-green-700"></i>
                            
                        </div>
                        <div className='w-full h-[30%] text-[1.7rem] pl-4'>
                            20
                        </div>
                        <div className='w-full flex items-start justify-start p-3'>
                            <h2 className='text-start w-full'>Reports currently under review</h2>
                        </div>
                      </div>
    
                </div>
    
             {/* charts and notification or log */}
                <div className='w-full min-h-[500px] bg  flex flex-col lg:flex-row items-center justify-center bg-[#1e293b] p-4 rounded-[10px]'>
                      <div className='w-full lg:w-1/2 h-[280px]  lg:h-full'>
                      <h1 className='text-[1.5rem] mb-2'>User Growth (Past 6 Months)</h1>
                      <p className="text-white text-sm mb-5">Monthly new user registrations</p>
                        <Bar style={{cursor:"pointer"}} data={data} options={options} />
                      </div>
    
                      <div className='w-full lg:w-1/2 h-[350px] lg:h-full  flex flex-col items-center justify-between p-3 pl-8'>
                      <h1 className='text-[1.4rem] text-start w-full'>Recent Activity & Reports</h1>
                      <div className='w-full h-[90%]  flex flex-col items-start justify-evenly'>
    
                        <div className='w-full h-[15%]  flex flex-row items-center justify-between p-2 border-[1px] rounded-[5px]'>
                            <div className='w-[80%] h-full flex flex-col text-[12px] items-start justify-start pb-[2px] lg:text-[1rem]'>
                                <h1>New User registered. "FoodLover123"</h1>
                                <p className='text-[10px]'>2 mins ago</p>
                            </div>
                            <div className='pl-2 pr-2 bg-purple-600 rounded-[5px] flex items-center justify-center pb-1 text-[12px] lg:text-[1rem]'>
                                new
                            </div>
                        </div>
    
                        <div className='w-full h-[15%]  flex flex-row items-center justify-between p-2 border-[1px] rounded-[5px]'>
                            <div className='w-[80%] h-full flex flex-col text-[12px] items-start justify-start pb-[2px] lg:text-[1rem]'> 
                                <h1>Food post flogged: "FoodLover123"</h1>
                                <p className='text-[10px]'>1 hour ago</p>
                            </div>
                            <div className='pl-2 pr-2 bg-yellow-300 rounded-[5px] flex items-center justify-center pb-1 text-[12px] lg:text-[1rem]'>
                                pending
                            </div>
                        </div>
                        <div className='w-full h-[15%]  flex flex-row items-center justify-between p-2 border-[1px] rounded-[5px]'>
                            <div className='w-[80%] h-full flex flex-col text-[12px] items-start justify-start pb-[2px] lg:text-[1rem] '>
                                <h1>Report resolved: "Demo@232"</h1>
                                <p className='text-[10px]'>yesterday</p>
                            </div>
                            <div className='pl-2 pr-2 bg-green-500 rounded-[5px] flex items-center justify-center pb-1 text-[12px] lg:text-[1rem]'>
                                resolved
                            </div>
                        </div>
                        <div className='w-full h-[15%]  flex flex-row items-center justify-between p-2 border-[1px] rounded-[5px]'>
                            <div className='w-[80%] h-full flex flex-col text-[12px] items-start justify-start pb-[2px] lg:text-[1rem] '>
                                <h1>New User registered. "Foodie@11"</h1>
                                <p className='text-[10px]'>2 days ago</p>
                            </div>
                            <div className='pl-2 pr-2 bg-purple-600 rounded-[5px] flex items-center justify-center pb-1 text-[12px] lg:text-[1rem]'>
                                new
                            </div>
                        </div>
                        <div className='w-full h-[15%]  flex flex-row items-center justify-between p-2 border-[1px] rounded-[5px]'>
                            <div className='w-[80%] h-full flex flex-col text-[12px] items-start justify-start pb-[2px] lg:text-[1rem]'>
                                <h1>New User registered. "AjayKannan143"</h1>
                                <p className='text-[10px]'>3 days ago</p>
                            </div>
                            <div className='pl-2 pr-2 bg-purple-600 rounded-[5px] flex items-center justify-center pb-1 text-[12px] lg:text-[1rem]'>
                                new
                            </div>
                        </div>
    
                      </div>
                      </div>
                </div>
    
    
            {/* quick action */}
                <div className='w-full min-h-[120px] bg bg-[#1e293b] flex flex-col items-start justify-evenly p-3 rounded-[10px]'>
                    <h1 className='w-full text-start text-[1.3rem] pb-2'>Quick Navigation</h1>
                    <div className='w-full h-[90%] flex flex-col   lg:flex-row items-center justify-center gap-3'>
    
                        <div className='w-[70%] lg:w-[20%] h-1/2 lg:h-full border-[1px]  flex flex-row items-center justify-evenly p-2 pl-3 pr-3 rounded-[5px] cursor-pointer'>
                        <i className="fa-solid fa-users"></i>
                        <h1>Manage Users</h1>
                        </div>
    
                        <div className='w-[70%] lg:w-[20%] h-1/2 lg:h-full border-[1px]  flex flex-row items-center justify-evenly p-2 pl-3 pr-3 rounded-[5px] cursor-pointer'>
                        <i className="fa-solid fa-image"></i>
                        <h1>Manage Posts</h1>
                        </div>
    
                        <div className='w-[70%] lg:w-[20%] h-1/2 lg:h-full border-[1px]  flex flex-row items-center justify-evenly p-2 pl-3 pr-3 rounded-[5px] cursor-pointer'>
                        <i className="fa-solid fa-flag"></i>
                        <h1>Manage Reports</h1>
                        </div>
    
                        <div className='w-[70%] lg:w-[20%] h-1/2 lg:h-full border-[1px]  flex flex-row items-center justify-evenly p-2 pl-3 pr-3 rounded-[5px] cursor-pointer'>
                        <i className="fa-solid fa-wrench"></i>
                        <h1> App Settings</h1>
                        </div>
    
                    </div>
                </div> 
            </div> 
  )
}

export default AdminDash