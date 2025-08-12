
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './Components/AdminDashboard';

import DonarDashBoard from './Components/DonarDashBoard';
import ReceiverDashboard from './Components/ReceiverDashboard';
import PageNotFound from './Components/PageNotFound';

function App() {

 return (
 <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ReceiverDashboard/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/donor" element={ <DonarDashBoard/>} />
        {/* 404 Page */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
     </BrowserRouter>
     


  </>
 );
}

export default App;
