import { useState, useEffect } from "react";
import axios from "axios";

interface Job {
  _id: string;
  title: string;
  desc: string;
  contract: string;
  lieu: string;
  technologies: string[];
}

const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
        const token = localStorage.getItem("token"); 
        if (!token) {
            alert("You must be logged in to apply!");
            return;
        }

      const response = await axios.get(
        `http://localhost:3001/offers`,
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });
      setJobs(response.data);
    } catch (err) {
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const applyForJob = async (userId: string, offerId: string) => {
    try {
      const token = localStorage.getItem("token"); 
      if (!token) {
        alert("You must be logged in to apply!");
        return;
      }

      const response = await axios.post(
        `http://localhost:3001/auth/${userId}/apply/${offerId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message || "Application submitted successfully!");
    } catch (err) {
      alert("Failed to apply for the job. Please try again.");
    }
  };

    const saveOffer = async (userId: string, offerId: string) => {
        try {
            const token = localStorage.getItem("token"); 
            if (!token) {
                alert("You must be logged in to save offers!");
                return;
            }

            const response = await axios.post(
                `http://localhost:3001/auth/${userId}/save/${offerId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Offer saved successfully:", response.data);
            alert("Offer saved successfully!");

        } catch (err) {
            console.error("Error saving offer:", err);
            alert("Failed to save offer!");
        }
    };

  return { jobs, loading, error, applyForJob, saveOffer };
};

export default useJobs;
