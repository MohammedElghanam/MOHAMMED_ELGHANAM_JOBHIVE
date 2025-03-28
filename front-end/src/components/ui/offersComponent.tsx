import React from 'react'
import useJobs from '../../hooks/useJobs'
import { Offer } from '../../types/offerTypes';

interface OffersComponentProps {
    userId: string;
    onSelectOffer: (offer: Offer) => void;
}

export default function OffersComponent({ userId, onSelectOffer  }: any) {

    const { jobs, loading, error, applyForJob, saveOffer } = useJobs();

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>Errodr: {error}</p>;

  return (
    <>
        {jobs.map((offer, index) => (
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
