import { useState } from "react";

const useCreateOffer = () => {

    const [formData, setFormData] = useState<{
        title: string;
        desc: string;
        contract: string;
        lieu: string;
        technologies: string[]; 
      }>({
        title: "",
        desc: "",
        contract: "",
        lieu: "",
        technologies: [],
      });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOffer = async (offerData: any) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(offerData),
      });
      if (!response.ok) {
        throw new Error("Failed to create offer");
      }else{
        alert('create offer success');
        setFormData({
            title: "",
            desc: "",
            contract: "",
            lieu: "",
            technologies: [],
        });
        return await response.json();
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, createOffer, loading, error };
};

export default useCreateOffer;