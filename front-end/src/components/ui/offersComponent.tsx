import React, { useState } from 'react'
import useJobs from '../../hooks/useJobs'
import { Offer } from '../../types/offerTypes';

interface OffersComponentProps {
    userId: string;
    onSelectOffer: (offer: Offer) => void;
}

export default function OffersComponent({ userId, onSelectOffer  }: any) {

    localStorage.setItem('userId', userId);
    const { jobs, loading, error, applyForJob, saveOffer } = useJobs();

    const [searchQuery, setSearchQuery] = useState("");
    const [contractFilter, setContractFilter] = useState("");
  
    const filteredJobs = jobs.filter((offer) => {
        const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });


    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>Errodr: {error}</p>;

  return (
    <>
    <div className="flex gap-4 mb-4">
            <input 
                type="text" 
                placeholder="Search jobs..." 
                className="p-2 border border-gray-300 rounded w-1/2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

        {filteredJobs.map((offer, index) => (
            <div onClick={() => onSelectOffer(offer)} key={index}  className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold"> {offer.title} </h3>
                    <p className="text-gray-600"> {offer.desc} </p>
                </div>
                <div className=' flex justify-center items-center gap-3'>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={() => applyForJob(userId, offer._id)}>Apply</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={() => saveOffer(userId, offer._id)}>save</button>
                </div>
            </div>
        ))}
    </>
  )
}
