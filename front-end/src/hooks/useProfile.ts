import { useState, useEffect } from "react";
import axios from "axios";
import { UserData } from "../types/userTypes"; 

const useProfile = (userId: string | undefined, initialData: UserData) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<UserData>(initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setProfileData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "technologies") {
      setProfileData({
        ...profileData,
        [name]: value.split(", ").map((tech) => tech.trim()), 
      });
    } else {
      setProfileData({
        ...profileData,
        [name]: value,
      });
    }
  };
  
  
  const handleSave = async () => {
    if (!userId) return;

    try {
      const response = await axios.patch(
        `http://localhost:3001/auth/${userId}/update`,
        profileData 
      );
      console.log("Profile updated:", response.data);
      setIsEditing(false); 
    } catch (error) {
      setError("Error updating profile");
      console.error(error);
    }
  };

  return {
    isEditing,
    setIsEditing,
    profileData,
    setProfileData,
    handleChange,
    handleSave,
    error,
  };
};

export default useProfile;
