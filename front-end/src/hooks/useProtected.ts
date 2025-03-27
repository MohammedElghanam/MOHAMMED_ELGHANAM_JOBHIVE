import React, { useEffect, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedProps {
    children: ReactElement<{ userData?: any }>;
}

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    const expirationTime = decodedToken.exp * 1000; 
    const currentTime = Date.now();

   
    if (currentTime <= expirationTime) {
      return decodedToken;  
    } else {
      localStorage.removeItem('token');
      return false; 
    }
  } catch (error) {
    return false; 
  }
};

const Protected: React.FC<ProtectedProps> = ({ children }) => {
    const navigate = useNavigate();
    const decodedToken = isAuthenticated(); 
  
    useEffect(() => {
      if (!decodedToken) {
        navigate('/'); 
      }
    }, [navigate, decodedToken]);
  
    if (!decodedToken) {
      return null;  
    }
  
    return React.cloneElement(children, { userData: decodedToken }); 
  };

  export default Protected;
