import React from 'react'
import { UserData } from '../../types/userTypes'
import { useLocation } from 'react-router-dom';
import useSwitsh from '../../hooks/useSwitsh';
import OffersComponent from '../ui/offersComponent';
import SavedComponent from '../ui/savedComponent';
import AppliedComponent from '../ui/appliedComponent';
import ProfileComponent from '../ui/profileComponent';
import OfferDetailsComponent from '../ui/offerDetailsComponent';
import useLogout from '../../hooks/useLogout';

export default function Home() {

    const location = useLocation();
    const userData: UserData = location.state?.userData;

    const logout = useLogout();
    
    const { 
        activeComponent,
        setActiveComponent,
        selectedOffer,
        handleApply,
        handleSelectOffer
     } = useSwitsh();
    

  return (

<div className="flex h-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-gray-900 text-white p-4 fixed h-full">
      <h2 className="text-xl font-bold mb-4">JOBhive</h2>
      <ul>
        <button onClick={() => setActiveComponent(1)} className=" flex justify-start items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
            <svg className=' w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M12 7V21"/>
                <path d="M22 10H2"/>
                <path d="M12 2C10 2 8 4 8 6c0 2 2 3 4 3s4-1 4-3c0-2-2-4-4-4z"/>
            </svg>
            <p> Offers </p>
        </button>
        <button onClick={() => setActiveComponent(2)} className=" flex justify-start items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
            <svg className=' w-5 h-5'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            <p>Save</p>
        </button>
        <button onClick={() => setActiveComponent(3)} className=" flex justify-start items-center gap-2 py-2 px-4 hover:bg-gray-700 rounded">
            <svg className=' w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/>
                <path d="M9 14l2 2 4-4"/>
            </svg>
            <p>Applayd</p>
        </button>
      </ul>
    </aside>

    {/* Main Content */}
    <div className="flex-1 flex flex-col ml-64">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 fixed w-5/6 top-0 left-64 flex justify-between items-center z-10">
        <h2 className="text-lg font-semibold">Navbar</h2>
        <div className=' flex justify-center items-center gap-3 '>
            <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded w-">Logout</button>
            <button onClick={() => setActiveComponent(4)} className=' cursor-pointer '>{ userData.name }</button>
        </div>
      </nav>

       {/* Page Content */}
       <main className="p-6 mt-16 overflow-y-auto flex-1 h-full bg-gray-100">
          {/* Search & Filter */}
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="p-2 border border-gray-300 rounded w-1/2"
            />
            <select className="p-2 border border-gray-300 rounded w-1/4">
              <option value="">Filter by</option>
              <option value="remote">Remote</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </select>
          </div>

          {/* Job Cards List */}
          <div className="space-y-4">
            {activeComponent === 1 && <OffersComponent userId={userData.userId} onSelectOffer={handleSelectOffer} />}
            {activeComponent === 2 && <SavedComponent userId={userData.userId} />}
            {activeComponent === 3 && <AppliedComponent userId={userData.userId} />}
            {activeComponent === 4 && <ProfileComponent userId={userData.userId} initialData={ userData } />}
            {activeComponent === 5 && selectedOffer &&  <OfferDetailsComponent offer={selectedOffer} onApply={handleApply} />}
            
           
          </div>
        </main>
    </div>
  </div>
  )
}
