import { useState, useEffect } from "react";
import axios from "axios";

const useSavedOffers = (userId: string | undefined) => {
  const [savedOffers, setSavedOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchSavedOffers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/auth/${userId}/saved-offers`);
        setSavedOffers(response.data.savedOffers); 
      } catch (err) {
        setError("Error fetching saved offers");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedOffers();
  }, [userId]);

  return { savedOffers, loading, error };
};

export default useSavedOffers;
