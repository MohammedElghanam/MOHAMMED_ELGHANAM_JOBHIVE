import { useState, useEffect } from "react";
import axios from "axios";
import { Offer } from "../types/offerTypes";

const useRecruteur = (recruiterId: string) => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {

        const token = localStorage.getItem("token"); 
        if (!token) {
            alert("You must be logged in to save offers!");
            return;
        }
        
        const response = await axios.get(`http://localhost:3001/offers/${recruiterId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setOffers(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (recruiterId) {
      fetchOffers();
    }
  }, [recruiterId]);

  return { offers, loading, error };
};

export default useRecruteur;
