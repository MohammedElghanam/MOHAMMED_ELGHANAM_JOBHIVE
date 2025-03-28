import React from "react";
import useRecruteur from "../../hooks/useRecruteur";
import { Offer } from "../../types/offerTypes";
import useDeleteOffer from "../../hooks/useDeleteOffer";

interface OffersComponentProps {
    recruiterId: any;
    setActiveComponent: (componentId: number) => void;
}

export default function RecruiterOffers({ recruiterId, setActiveComponent }: OffersComponentProps) {
  const { offers, setOffers, loading, error } = useRecruteur(recruiterId);
  const { deleteOffer } = useDeleteOffer(offers, setOffers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className=" w-full flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold mb-4">Offers Created</h2>
        <button onClick={() => setActiveComponent(2)} className="bg-blue-500 text-white px-4 py-2 rounded" >Create</button>
      </div>
      {offers.length > 0 ? (
        offers.map((offer: Offer) => (
            <div key={offer._id}  className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold"> {offer.title} </h3>
                <p className="text-gray-600"> {offer.desc} </p>
            </div>
            <div className=' flex justify-center items-center gap-3'>
                <button className="bg-green-500 text-white px-4 py-2 rounded" >Update </button>
                <button onClick={() => deleteOffer(offer._id)} className="bg-red-500 text-white px-4 py-2 rounded" >Delete</button>
            </div>
        </div>
        ))
      ) : (
        <p>No offers created yet.</p>
      )}
    </div>
  );
}
