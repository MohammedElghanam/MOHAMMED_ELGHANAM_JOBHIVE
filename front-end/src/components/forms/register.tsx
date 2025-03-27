import React from 'react'
import useRegister from '../../hooks/useRegister';
import Error from '../alerts/errors';

export default function Register() {
  
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        handleRoleSelection,
        errors,
        errorMessage,
        setErrorMessage,
    } = useRegister();

    return <>
    <div className=" w-full h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
        <div className=" bg-white p-5 lg:p-10 rounded-lg">
            <h1 className=" text-center mb-3 lg:mb-6 font-semibold text-gray-900 text-lg lg:text-xl">Let’s sign you up</h1>
            <form onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-center items-start mb-3">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Username <span className=" text-red-600">*</span></label>
                    <input 
                        onChange={(e) => { setName(e.target.value) } }
                        value={name}
                        id="name" 
                        type="name"
                        name="name"
                        placeholder=" Enter Username" 
                        className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className=" flex flex-col justify-center items-start mb-3">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email Address <span className=" text-red-600">*</span></label>
                    <input 
                        onChange={(e) => { setEmail(e.target.value) } }
                        value={email}
                        id="email" 
                        type="email"
                        name="email"
                        placeholder=" Enter Email Address" 
                        className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="  flex flex-col justify-center items-start mb-3">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Password <span className=" text-red-600">*</span></label>
                    <input 
                        onChange={ (e) => { setPassword(e.target.value) }}
                        value={password}   
                        id="password" 
                        type="password" 
                        name="password"
                        placeholder=" Enter Password" 
                        className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div className="  flex flex-col justify-center items-start mb-3">
                    <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-2" htmlFor="password">Select an account type <span className=" text-red-600">*</span></label>
                    <div className=' flex justify-between items-center gap-3 w-full'>
                        <p onClick={() => handleRoleSelection('condidature')} className=' w-full py-1 rounded-md border-[0.5px] border-gray-500 text-center text-sm'>Employer</p>
                        <p onClick={() => handleRoleSelection('recruteur')} className=' w-full py-1 rounded-md border-[0.5px] border-gray-500 text-center text-sm'>Talent</p>
                    </div>
                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>
                

                
                <div className="">
                    <button className=" w-full h-9 bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold text-sm lg:text-sm">Register</button>
                </div>
                
               
                <div className=" flex justify-center items-center mt-6">
                    <p className=" text-xs font-medium text-gray-800">Already have an account with us? 
                        <a className=" text-blue-500" href="/login"> Log in here.</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
    {errorMessage && <Error errorMessage={ errorMessage } setErrorMessage={ setErrorMessage } />}
</>
}