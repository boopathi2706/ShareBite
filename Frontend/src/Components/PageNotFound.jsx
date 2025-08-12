import React from 'react';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl font-bold text-purple-500/20 blur-sm">
            404
          </div>
        </div>

        {/* Cartoon Character */}
        <div className="mb-8 relative">
          <div className="w-64 h-64 mx-auto relative">
            {/* Robot Body */}
            <div className="absolute inset-x-1/2 top-16 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-gray-300 to-gray-400 rounded-2xl shadow-lg">
              {/* Robot Face */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-lg">
                {/* Eyes */}
                <div className="flex justify-center items-center h-full space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              
              {/* Robot Arms */}
              <div className="absolute -left-8 top-8 w-6 h-16 bg-gray-400 rounded-full transform rotate-12"></div>
              <div className="absolute -right-8 top-8 w-6 h-16 bg-gray-400 rounded-full transform -rotate-12"></div>
              
              {/* Robot Legs */}
              <div className="absolute -bottom-8 left-6 w-6 h-12 bg-gray-400 rounded-full"></div>
              <div className="absolute -bottom-8 right-6 w-6 h-12 bg-gray-400 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute top-12 right-4 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute bottom-8 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            The page you're looking for seems to have wandered off into cyberspace.
          </p>
          <p className="text-lg text-gray-400">
            Don't worry, even our robot friend is confused! 🤖
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" >
            <Home size={20} />
            <span>Go Home</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
          
          
        </div>

        {/* Additional Help */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RefreshCw size={24} className="text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Need Help?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Try refreshing the page or Check the URL.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Home</span>
            <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">About</span>
            <span className="bg-pink-600/30 text-pink-200 px-3 py-1 rounded-full text-sm">Contact</span>
            <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Support</span>
          </div> */}
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
