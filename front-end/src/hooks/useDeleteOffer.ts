import { useState } from "react";

const useDeleteOffer = (offers: any[], setOffers: (offers: any[]) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteOffer = async (offerId: string) => {
    alert(offerId)
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/offers/${offerId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete offer");
      }

      setOffers(offers.filter((offer) => offer._id !== offerId));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteOffer, loading, error };
};

export default useDeleteOffer;
