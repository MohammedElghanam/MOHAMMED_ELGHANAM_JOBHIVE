import { useState, useEffect } from "react";
import axios from "axios";

const useAppliedOffers = (userId: string | undefined) => {
    const [appliedOffers, setAppliedOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (!userId) return;
  
      const fetchAppliedOffers = async () => {
        try {

            console.log("id", userId);
            
            const token = localStorage.getItem("token"); 
            if (!token) {
                alert("You must be logged in to apply!");
                return;
            }

          const response = await axios.get(
            `http://localhost:3001/offers/${userId}/applied-offers`,
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
          );
          setAppliedOffers(response.data); 
        } catch (err) {
          setError("Error fetching saved offers");
        } finally {
          setLoading(false);
        }
      };
  
      fetchAppliedOffers();
    }, [userId]);
  
    return { appliedOffers, loading, error };
}

export default useAppliedOffers;
