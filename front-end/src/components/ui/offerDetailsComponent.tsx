import React from "react";
import { Offer } from "../../types/offerTypes";

interface OfferDetailsProps {
  offer: Offer;
  onApply: () => void;
}

const OfferDetailsComponent: React.FC<OfferDetailsProps> = ({ offer, onApply }: OfferDetailsProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{offer.title}</h2>

      <div className="space-y-4">

        
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Technologies</h3>
          <p className="text-gray-600">
            {offer.technologies && offer.technologies.length > 0
              ? offer.technologies.join(", ")
              : "No technologies specified"}
          </p>
        </div>
=
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600">{offer.desc || "No description available"}</p>
        </div>

        {onApply && (
          <div className="flex justify-center mt-6">
            <button
              onClick={onApply}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferDetailsComponent;
