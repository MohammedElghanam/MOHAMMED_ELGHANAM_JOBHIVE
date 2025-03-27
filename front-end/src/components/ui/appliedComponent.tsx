import React from 'react'
import useAppliedOffers from '../../hooks/useAppliedOffers'

export default function AppliedComponent({ userId }: { userId: string }) {
    const { appliedOffers, loading, error } = useAppliedOffers(userId);
    return (
        <div>
        {appliedOffers.length > 0 ? (
          <ul>
            {appliedOffers.map((applied: any) => (
                <div key={applied._id}  className="bg-white p-4 rounded shadow flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold"> {applied.title} </h3>
                        <p className="text-gray-600"> {applied.desc} </p>
                    </div>
                </div>
            ))}
          </ul>
        ) : (
          <p>No applied offers found.</p>
        )}
      </div>
  )
}
