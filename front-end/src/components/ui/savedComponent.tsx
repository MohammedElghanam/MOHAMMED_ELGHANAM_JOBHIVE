import React from 'react'
import useSavedOffers from '../../hooks/useSavedOffers';

export default function SavedComponent({ userId }: { userId: string }) {
    const { savedOffers, loading, error } = useSavedOffers(userId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
  
    return (
      <div>
        {savedOffers.length > 0 ? (
          <ul>
            {savedOffers.map((offer: any) => (
                <div key={offer._id}  className="bg-white p-4 rounded shadow flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-lg font-semibold"> {offer.title} </h3>
                        <p className="text-gray-600"> {offer.desc} </p>
                    </div>
                </div>
            ))}
          </ul>
        ) : (
          <p>No saved offers found.</p>
        )}
      </div>
  )
}
