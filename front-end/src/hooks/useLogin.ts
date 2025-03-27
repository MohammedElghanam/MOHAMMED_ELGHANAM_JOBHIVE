import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { validate } from "../validation/validLogin"; 
import axios, { AxiosError } from "axios";

const useLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const validationErrors = validate(email, password);
        setErrors(validationErrors);

        if (!validationErrors.email && !validationErrors.password) {

            const formData = { email, password}
            try {
                console.log(process.env.BASE_URL);
                
                const response = await axios.post(`http://localhost:3001/auth/login`, formData);

                if (response.status === 200) {
                    console.log('dkhal hna');
                    console.log(response);
                    
                    
                    setEmail('');
                    setPassword('');
                    localStorage.setItem('token', response.data.token);
                    navigate('/recruteur')
                }

            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    if (error.response && error.response.status === 400) {
                        setErrorMessage(error.response.data.message || "Invalid request");
                        console.log("Error registering user:", error.response.data.message);
                    }
                } else {
                    console.log("Unexpected error:", error);
                    setErrorMessage("An unexpected error occurred");
                }
            }            
        }

    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        errorMessage,
        setErrorMessage
    }
}

export default useLogin;