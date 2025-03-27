import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validate } from '../validation/authValidation';

const useRegister = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string; role?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate({ email, password, name, role, key: 'register' });
    setErrors(validationErrors);

    const isErrorsEmpty = Object.keys(validationErrors).length === 0;

    if (isErrorsEmpty) {
      const formData = { name, email, password };
      try {
        const response = await axios.post(`${process.env.BASE_URL}/auth/register`, formData);

        if (response.status === 201) {
          alert(response.data.message);
          setName('');
          setEmail('');
          setPassword('');
          setRole('');
          navigate('/login');
        }
      } catch (error: any) {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An unexpected error occurred');
        }
      }
    }
  };

  const handleNavigation = () => {
    navigate('/login');
  };

  const handleRoleSelection = (role: string) => {
    setRole(role); 
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    handleNavigation,
    handleRoleSelection,
    errors,
    errorMessage,
    setErrorMessage,
  };
};

export default useRegister;
