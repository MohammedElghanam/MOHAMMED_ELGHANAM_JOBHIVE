import React, { useState } from 'react'
import useJobs from '../../hooks/useJobs'
import { Offer } from '../../types/offerTypes';

interface OffersComponentProps {
    userId: string;
    onSelectOffer: (offer: Offer) => void;
}

export default function OffersComponent({ userId, onSelectOffer  }: any) {

    const { jobs, loading, error, applyForJob, saveOffer } = useJobs();

    const [searchQuery, setSearchQuery] = useState("");
    const [contractFilter, setContractFilter] = useState("");
  
    const filteredJobs = jobs.filter((offer) => {
        const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesContract = contractFilter ? offer.contract=== contractFilter : true;
        return matchesSearch && matchesContract;
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
            <select
                className="p-2 border border-gray-300 rounded w-1/4"
                value={contractFilter}
                onChange={(e) => setContractFilter(e.target.value)}
                >
                <option value="">Filter by Contract</option>
                <option value="remote">Remote</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
            </select>
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
