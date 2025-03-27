interface ValidationParams {
    email: string;
    password: string;
    name?: string;
    role?: string;
    key: string;
  }
  
  
  const validate = ({ email = '', password = '', name = '', role='', key = '' }: ValidationParams) => {
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
  
      const errors: { [key: string]: string } = {};
  
    switch (key) {
      case 'login':
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        break;
  
      case 'register':
        if (!name) errors.name = 'Name is required';
        if (name.length < 3) errors.name = 'The name must be at least 4 characters';
        if (!email) errors.email = 'Email is required';
        if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address';
        if (!password) errors.password = 'Password is required';
        if (password.length < 8) errors.password = 'Password must be at least 8 characters';
        if (!role) errors.role = 'Type is required';
       
        break;
  
      default:
        break;
    }
  
    return errors;
  };
  
  export { validate };