import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <div className="w-24 fixed h-full bg-white border-r border-gray-300 flex flex-col justify-start items-center gap-4 py-4">
    {/* Sidebar Content */}
    <img
      src={logo} 
      alt="test" 
      width={100} 
      height={100}
      className=" w-10 h-10 mb-6" 
    />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </div>

  {/* Main Content Area */}
  <div className="flex flex-col flex-grow ml-24">
    {/* Navbar */}
    <div className="h-16 fixed w-[calc(100%-6rem)] bg-gray-100 flex items-center justify-between px-4">
      {/* Navbar Content */}
      <div className=" flex justify-start items-center gap-3">
        <img 
          src="/settings.png" 
          alt="test" 
          width={100} 
          height={100}
          className=" w-7 h-7" 
        />
        <h1 className=" font-sans text-3xl font-bold text-blue-950"> Dashboard</h1>
      </div>
      <div className=" flex justify-between items-center gap-4">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" iconColor="rgb(4, 0, 78, 0.5)" className="sc-kLLXSd JQQmO">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19 10C19 14.9709 14.9709 19 10 19C5.02908 19 1 14.9709 1 10C1 5.02908 5.02908 1 10 1C14.9709 1 19 5.02908 19 10Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7.5 7.85597C7.5 6.44958 8.61924 5.31 10.0005 5.31C11.3808 5.31 12.5 6.44958 12.5 7.85597C12.5 8.72917 12.0679 9.49976 11.4096 9.95815C10.7297 10.4315 10.0005 11.0725 10.0005 11.9009V12.31M9.99644 14.693H10.0039" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 16.8476C16.6392 16.8476 19.2481 16.1242 19.5 13.2205C19.5 10.3188 17.6812 10.5054 17.6812 6.94511C17.6812 4.16414 15.0452 1 11 1C6.95477 1 4.31885 4.16414 4.31885 6.94511C4.31885 10.5054 2.5 10.3188 2.5 13.2205C2.75295 16.1352 5.36177 16.8476 11 16.8476Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.3888 19.8572C12.0247 21.3719 9.89665 21.3899 8.51947 19.8572" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <img 
          src="/test.jpg" 
          alt="test" 
          width={100} 
          height={100}
          className=" w-10 h-10 rounded-lg" 
        />
      </div>
    </div>

    {/* Scrollable Content */}
    <div className=" grid grid-cols-12 mt-16 overflow-y-auto flex-grow ">
      <div className=" col-span-9 flex flex-col gap-4 bg-gray-100 py-8 pl-8">
        {/* Dynamic Content */}
       
        <div className=" flex justify-between items-center">
          <div className=" flex justify-between items-center w-full">
            <div className=" flex justify-between items-center gap-4">
                 <h1 className=" text-xl font-bold text-[#0c183f]">Recommended jobs</h1>
                 <p className=" px-3 rounded-xl bg-gray-400 bg-opacity-30 text-lg">8</p>
            </div>

            <div className=" flex justify-center items-center gap-2">
                 <p className=" text-xl font-extralight text-blue-700 cursor-pointer"> View all</p>
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" className=" text-xl font-semibold">
                   <path fill="#1d4ed8" d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z" />
                 </svg>
               </div>
            </div>
        </div>

             { offers && offers.map((offer) => (
               <div key={offer._id} className=" bg-gray-50 border border-[#94a3b8] rounded-xl p-6 group hover:cursor-pointer">

                 <div className=" flex justify-start items-center gap-4 mb-1 pb-3">
                   <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-placeholder rounded-lg border border-gray-300">
                     <path d="M11.4851 7.5H18.5141C20.9708 7.5 22.5 9.23432 22.5 11.6886V18.3114C22.5 20.7657 20.9708 22.5 18.5132 22.5H11.4851C9.02838 22.5 7.5 20.7657 7.5 18.3114V11.6886C7.5 9.23432 9.03568 7.5 11.4851 7.5Z" fill="url(#paint0_linear_5093_25513)"></path>
                     <path d="M11.25 13.3835C11.25 11.5148 12.9289 10 15 10C17.0711 10 18.75 11.5148 18.75 13.3835C18.75 14.0684 18.5244 14.7057 18.1367 15.2384C17.7454 15.776 17.3232 16.3417 17.0799 16.9442C16.8731 17.4563 16.4273 17.9167 15.875 17.9167H14.125C13.5727 17.9167 13.1269 17.4563 12.9201 16.9442C12.6768 16.3417 12.2546 15.776 11.8633 15.2384C11.4756 14.7057 11.25 14.0684 11.25 13.3835Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path>
                     <path d="M13.543 20H16.4596" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                     <defs>
                       <linearGradient id="paint0_linear_5093_25513" x1="15" y1="7.5" x2="14.08" y2="22.4434" gradientUnits="userSpaceOnUse">
                         <stop stop-color="#DDD7FF"></stop>
                         <stop offset="1" stop-color="#BEDFFF"></stop>
                       </linearGradient>
                     </defs>   
                   </svg>
                   <h1 className=" text-2xl font-extralight underline text-blue-700 hover:cursor-pointer "> {offer.companyName} </h1>
                 </div> 

                 <div className=" flex justify-between items-center">
                   <h1 className=" text-lg text-[#94a3b8]">{offer.seniority}</h1>
                   <div className=" flex justify-center items-center gap-4">
                     <h1 className=" text-lg font-light text-[#94a3b8]">{offer.rate}</h1>
                     <button className=" px-6 py-2 rounded-full bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-600">Apply</button>
                   </div>
                 </div>

                 <div className=" flex justify-start items-center gap-4 my-5">
                   <h1 className=" text-xl text-blue-950">{offer.title}</h1>

                   <div className=" flex justify-center items-center gap-1 bg-[#ff1212] bg-opacity-5 rounded-2xl px-4 py-0.5">
                     <svg className="recharts-surface" width="30" height="30" viewBox="0 0 30 30" version="1.1">
                       <defs>
                         <clipPath id="recharts3-clip" >
                           <rect x="5" y="5" height="20" width="20"></rect>
                         </clipPath>
                       </defs>
                       <g className="recharts-layer recharts-pie">
                         <g className="recharts-layer">
                           <g className="recharts-layer recharts-pie-sector">
                             <path fill="#ca8a04" stroke="#fff" className="recharts-sector bg-yellow-600" d="M 25,15 A 10,10,0, 0,0, 6.909830056250527,9.122147477075266 L 10.954915028125264,12.061073738537633 A 5,5,0, 0,1, 20,15 Z"></path>
                           </g>
                           <g className="recharts-layer recharts-pie-sector">
                             <path fill="#ffdd00" stroke="#fff" className="recharts-sector" d="M 6.909830056250527,9.122147477075266 A 10,10,0, 1,0, 25,15.000000000000002 L 20,15.000000000000002 A 5,5,0, 1,1, 10.954915028125264,12.061073738537633 Z"></path>
                           </g>
                         </g>
                       </g>
                     </svg>
                     <p className="font-normal"> {offer.profileMatched}  Profile match</p>
                   </div>
                 </div>

                  <div className=" flex justify-start items-center gap-4">
                    {offer.outils.map((outil, index) => (
                      <div key={index}>
                        <p className=" px-5 py-1 rounded-2xl bg-gray-500 bg-opacity-20 text-blue-950 font-medium w-fit "># {outil}</p>
                      </div>
                    ))}
                  </div>

    
                 <div className=" flex justify-start items-center gap-4 py-4 border-b border-gray-300">

                  <div className=" flex justify-start items-center gap-2">
                     {/* <svg 
    className="text-[#778292] group-hover:text-[#04004E]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C17 13.4186 13.4186 17 9 17C4.58141 17 1 13.4186 1 9C1 4.58141 4.58141 1 9 1C13.4186 1 17 4.58141 17 9Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M11.9679 11.5448L8.70734 9.5997V5.4077" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg> */}

<svg
    className="text-[#778292] group-hover:text-[#04004E]"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9C17 13.4186 13.4186 17 9 17C4.58141 17 1 13.4186 1 9C1 4.58141 4.58141 1 9 1C13.4186 1 17 4.58141 17 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9679 11.5448L8.70734 9.5997V5.4077"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
                     <p className=" group-hover:text-[#04004E] text-[#778292] ">{offer.contract}</p>
                   </div>

                   <div className=" flex justify-start items-center gap-2">
                     <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0.875 6.89744H15.3124" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M11.6878 10.0609H11.6953" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M8.09361 10.0609H8.10111" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M4.49156 10.0609H4.49906" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M11.6878 13.209H11.6953" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M8.09361 13.209H8.10111" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M4.49156 13.209H4.49906" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M11.3654 0.900024V3.56556" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M4.82197 0.900024V3.56556" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5228 2.1792H4.66429C2.28557 2.1792 0.799805 3.50431 0.799805 5.94005V13.2703C0.799805 15.7443 2.28557 17.1 4.66429 17.1H11.5153C13.9015 17.1 15.3798 15.7673 15.3798 13.3315V5.94005C15.3873 3.50431 13.909 2.1792 11.5228 2.1792Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                     <p className=" group-hover:text-[#04004E] text-[#778292]">{offer.duration}</p>
                   </div>

                   <div className=" flex justify-start items-center gap-2">
                     {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8889 7.66712C10.8889 6.43932 9.89403 5.44444 8.66713 5.44444C7.43933 5.44444 6.44446 6.43932 6.44446 7.66712C6.44446 8.89401 7.43933 9.88889 8.66713 9.88889C9.89403 9.88889 10.8889 8.89401 10.8889 7.66712Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66623 17C7.60092 17 2 12.4652 2 7.72292C2 4.01034 4.98409 1 8.66623 1C12.3484 1 15.3333 4.01034 15.3333 7.72292C15.3333 12.4652 9.73154 17 8.66623 17Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg> */}
                     <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#778292] group-hover:text-[#04004E]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8889 7.66712C10.8889 6.43932 9.89403 5.44444 8.66713 5.44444C7.43933 5.44444 6.44446 6.43932 6.44446 7.66712C6.44446 8.89401 7.43933 9.88889 8.66713 9.88889C9.89403 9.88889 10.8889 8.89401 10.8889 7.66712Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.66623 17C7.60092 17 2 12.4652 2 7.72292C2 4.01034 4.98409 1 8.66623 1C12.3484 1 15.3333 4.01034 15.3333 7.72292C15.3333 12.4652 9.73154 17 8.66623 17Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
      
                     <p className=" group-hover:text-[#04004E] text-[#778292]">{offer.location}</p>
                   </div>
                   
                   <div className=" flex justify-start items-center gap-2">
                     <svg  className="text-[#778292] group-hover:text-[#04004E]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.8846 8.15987C15.02 8.00034 15.8942 7.02691 15.8966 5.84756C15.8966 4.6853 15.0493 3.72164 13.9384 3.53932" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M15.3829 10.8894C16.4825 11.0538 17.25 11.4388 17.25 12.2323C17.25 12.7785 16.8886 13.1333 16.3042 13.3563" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0004 11.2259C6.3845 11.2259 4.15033 11.6223 4.15033 13.2054C4.15033 14.7876 6.37067 15.1954 9.0004 15.1954C11.6163 15.1954 13.8497 14.8031 13.8497 13.2192C13.8497 11.6353 11.6301 11.2259 9.0004 11.2259Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00036 8.96662C10.7169 8.96662 12.1087 7.57565 12.1087 5.85831C12.1087 4.14178 10.7169 2.75 9.00036 2.75C7.28383 2.75 5.89205 4.14178 5.89205 5.85831C5.88554 7.56914 7.26674 8.96092 8.97757 8.96662H9.00036Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M4.11543 8.15987C2.97922 8.00034 2.1059 7.02691 2.10345 5.84756C2.10345 4.6853 2.95073 3.72164 4.06171 3.53932" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M2.6171 10.8894C1.51751 11.0538 0.75 11.4388 0.75 12.2323C0.75 12.7785 1.11137 13.1333 1.69576 13.3563" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                     <p className=" group-hover:text-[#04004E] text-[#778292]">{offer.teamSize}</p>
                   </div>
                   <div className=" flex justify-start items-center gap-2">
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C17 13.4186 13.4186 17 9 17C4.58141 17 1 13.4186 1 9C1 4.58141 4.58141 1 9 1C13.4186 1 17 4.58141 17 9Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M10.9985 6.97669C10.9985 6.61685 10.8732 5.67534 9.99997 5.24352C8.2914 4.3986 6.56116 5.89716 7.10686 7.51645C7.65256 9.13573 11.0811 8.56591 10.9985 11.0621C10.916 13.5584 7 13.8749 7 10.6364M9 5V4M9 14V13" stroke="#04004E" stroke-width="1.5" stroke-linecap="round"></path>
                     </svg>
                     <p className=" group-hover:text-[#04004E] text-[#778292]">{offer.rate}</p>
                   </div>
                 </div>

                 <div className=" flex justify-between items-center py-2 pt-4">
                   <div className=" flex justify-start items-center gap-2">
                     <img 
                       src={offer.companyImage} 
                       alt="test" 
                       width={100} 
                       height={100}
                       className=" w-10 h-10 rounded-lg border border-gray-300" 
                     />
                     <h1 className=" flex justify-start items-center gap-3 text-[#94a3b8]"> {offer.companyName}  <div className=" w-1.5 h-1.5 rounded-full bg-[#94a3b8] "></div> {offer.timezone} </h1>
                   </div>
                   <div className="">
                     <h1 className=" text-[#94a3b8] text-lg">Job id: {offer.jobId} </h1>
                   </div>
                 </div>

               </div>
            
             ))}
        </div>



      <div className=" col-span-3 bg-gray-100 p-4 flex flex-col gap-4">
      



      <div className=" border border-[#94a3b8] rounded-2xl bg-white w-full p-4 mt-14 relative">
               <div className=" flex justify-end items-end h-14 relative">

                <img 
                  src="/test.jpg" 
                  alt="test" 
                  width={100} 
                  height={100}
                  className=" rounded-lg absolute -top-16 left-28" 
                />

                <svg width="19" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49928 1H4.71951C2.43338 1 1 2.61842 1 4.90962V11.0904C1 13.3816 2.42669 15 4.71951 15H11.2798C13.5733 15 15 13.3816 15 11.0904V8.0959M10.3298 2.17314L13.8382 5.68161M5.46016 7.02814L11.2023 1.28595C11.9177 0.571349 13.0772 0.571349 13.7926 1.28595L14.7277 2.22108C15.4431 2.93646 15.4431 4.09673 14.7277 4.81133L8.95787 10.5812C8.64514 10.8939 8.22099 11.0699 7.77839 11.0699H4.9L4.97223 8.16536C4.98299 7.73813 5.15741 7.33088 5.46016 7.02814Z" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>

              </div>

              <div className=" py-4 border-b border-gray-300">
                <h1 className=" text-xl text-blue-900">Mohamed E.</h1>
              </div>

              <div className=" py-4 border-b border-gray-300">
                <p className=" text-sm font-light text-[#94a3b8] mb-2">Beginner</p>
                <h1 className=" text-xl font-medium text-blue-900">Developer</h1>
              </div>

              <div className=" py-4 ">
                <div className=" flex justify-start items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-eKszNL hIWyNK me-2">
                    <path 
                      d="M1.71875 16.3168H0.968749C0.968749 16.731 1.30454 17.0668 1.71875 17.0668V16.3168ZM2.01164 12.4883L2.54197 13.0187L2.01164 12.4883ZM1.71875 13.1954H2.46875H1.71875ZM5.54718 16.0239L6.07751 16.5542L5.54718 16.0239ZM16.8284 3.32843L16.2981 3.85876V3.85876L16.8284 3.32843ZM16.8284 4.74264L16.2981 4.21231L16.8284 4.74264ZM14.7071 1.20711L15.2374 0.676777V0.676777L14.7071 1.20711ZM13.2929 1.20711L12.7625 0.676776L13.2929 1.20711ZM3.46479 1.48518L3.20223 0.782639C2.96323 0.871962 2.78603 1.07666 2.73188 1.326C2.67773 1.57533 2.75405 1.83509 2.93446 2.01551L3.46479 1.48518ZM1.4849 3.46508L2.01523 2.93475C1.83481 2.75433 1.57505 2.67801 1.32571 2.73216C1.07638 2.78632 0.871679 2.96351 0.782356 3.20251L1.4849 3.46508ZM3.85233 5.83251L3.322 6.36284C3.6149 6.65574 4.08977 6.65574 4.38266 6.36284L3.85233 5.83251ZM5.83223 3.85262L6.36256 4.38295C6.50321 4.24229 6.58223 4.05153 6.58223 3.85262C6.58223 3.6537 6.50321 3.46294 6.36256 3.32229L5.83223 3.85262ZM9.32285 12.2529L8.79252 11.7226L8.26219 12.2529L8.79252 12.7832L9.32285 12.2529ZM12.1513 9.42448L12.6816 8.89415L12.1513 8.36382L11.6209 8.89415L12.1513 9.42448ZM15.0975 16.6134L14.5672 16.083V16.083L15.0975 16.6134ZM16.5117 15.1991L17.0421 15.7295V15.7295L16.5117 15.1991ZM12.0303 2.96967C11.7374 2.67678 11.2625 2.67678 10.9696 2.96967C10.6767 3.26256 10.6767 3.73744 10.9696 4.03033L12.0303 2.96967ZM13.9696 7.03033C14.2625 7.32322 14.7374 7.32322 15.0303 7.03033C15.3232 6.73744 15.3232 6.26256 15.0303 5.96967L13.9696 7.03033ZM14.1767 1.73744L16.2981 3.85876L17.3587 2.7981L15.2374 0.676777L14.1767 1.73744ZM16.2981 4.21231L5.01685 15.4935L6.07751 16.5542L17.3587 5.27297L16.2981 4.21231ZM2.54197 13.0187L13.8232 1.73744L12.7625 0.676776L1.48131 11.958L2.54197 13.0187ZM4.84007 15.5668H1.71875V17.0668H4.84007V15.5668ZM2.46875 16.3168V13.1954H0.968749V16.3168H2.46875ZM1.48131 11.958C1.15312 12.2862 0.968749 12.7313 0.968749 13.1954H2.46875C2.46875 13.1291 2.49509 13.0655 2.54197 13.0187L1.48131 11.958ZM5.01685 15.4935C4.96996 15.5404 4.90637 15.5668 4.84007 15.5668V17.0668C5.3042 17.0668 5.74932 16.8824 6.07751 16.5542L5.01685 15.4935ZM16.2981 3.85876C16.3957 3.95639 16.3957 4.11468 16.2981 4.21231L17.3587 5.27297C18.0421 4.58955 18.0421 3.48151 17.3587 2.7981L16.2981 3.85876ZM15.2374 0.676777C14.554 -0.00663978 13.446 -0.00664258 12.7625 0.676776L13.8232 1.73744C13.9208 1.63981 14.0791 1.6398 14.1767 1.73744L15.2374 0.676777ZM6.78683 2.89802C7.9114 4.02259 7.86955 5.54476 6.78683 6.62748L7.84749 7.68814C9.49844 6.0372 9.57525 3.56513 7.84749 1.83736L6.78683 2.89802ZM6.78683 6.62748C5.65827 7.75604 3.97923 7.8686 2.89774 6.78711L1.83708 7.84777C3.60792 9.61861 6.24237 9.29326 7.84749 7.68814L6.78683 6.62748ZM3.72736 2.18772C4.7218 1.81606 5.93347 2.04466 6.78683 2.89802L7.84749 1.83736C6.58302 0.572897 4.7529 0.203099 3.20223 0.782639L3.72736 2.18772ZM2.89774 6.78711C2.04438 5.93375 1.81578 4.72208 2.18743 3.72764L0.782356 3.20251C0.202817 4.75319 0.572614 6.5833 1.83708 7.84777L2.89774 6.78711ZM0.954565 3.99541L3.322 6.36284L4.38266 5.30218L2.01523 2.93475L0.954565 3.99541ZM4.38266 6.36284L6.36256 4.38295L5.3019 3.32229L3.322 5.30218L4.38266 6.36284ZM6.36256 3.32229L3.99512 0.954848L2.93446 2.01551L5.3019 4.38295L6.36256 3.32229ZM9.85318 12.7832L12.6816 9.95481L11.6209 8.89415L8.79252 11.7226L9.85318 12.7832ZM11.6209 9.95481L15.9814 14.3153L17.0421 13.2546L12.6816 8.89415L11.6209 9.95481ZM14.2136 16.083L9.85318 11.7226L8.79252 12.7832L13.153 17.1437L14.2136 16.083ZM13.153 17.1437C13.8364 17.8271 14.9444 17.8271 15.6278 17.1437L14.5672 16.083C14.4696 16.1807 14.3113 16.1807 14.2136 16.083L13.153 17.1437ZM15.9814 14.3153C16.079 14.4129 16.079 14.5712 15.9814 14.6688L17.0421 15.7295C17.7255 15.0461 17.7255 13.938 17.0421 13.2546L15.9814 14.3153ZM10.9696 4.03033L13.9696 7.03033L15.0303 5.96967L12.0303 2.96967L10.9696 4.03033ZM15.9814 14.6688L14.5672 16.083L15.6278 17.1437L17.0421 15.7295L15.9814 14.6688Z" 
                      fill="#1e40af">
                    </path>
                  </svg>
                  <p className=" text-sm font-meduim text-blue-900 ">Most experienced with</p>
                </div>
                <div className=" flex justify-center items-center py-4">
                  <button className=" w-full py-2 bg-blue-700 rounded-full hover:bg-blue-800 text-white"> Add your skills</button>
                </div>
              </div>
            </div>

            <div className=" border border-[#94a3b8] rounded-2xl bg-white w-full p-4 flex flex-col gap-4">
                <div className="">
                  <div className=" flex justify-center items-center rounded-lg bg-red-500 bg-opacity-20 w-12 h-12">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 6.5H6M10 9.5H6" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.95 12.9489C10.8106 15.0884 7.64284 15.5507 5.05049 14.3518C4.66779 14.1977 4.35404 14.0732 4.05576 14.0732C3.22494 14.0781 2.19082 14.8837 1.65335 14.3469C1.11589 13.8094 1.92208 12.7744 1.92208 11.9386C1.92208 11.6403 1.80249 11.3321 1.64843 10.9487C0.448982 8.35674 0.911876 5.18788 3.05118 3.04904C5.78212 0.317102 10.219 0.317103 12.95 3.04834C15.6858 5.7845 15.6809 10.2177 12.95 12.9489Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>

                <h1 className="  text-xl text-blue-950"> We’d love to hear from you. </h1>
                <p className=" text-[#94a3b8]">Your feedback matters to us!
                Tell us how we can serve you better.</p>

                <div className=" flex justify-center items-center gap-2">
                  <img 
                    src="/download.png" 
                    alt="test" 
                    width={100} 
                    height={100}
                    className=" w-10 h-10 rounded-lg" 
                  />
                  <img 
                    src="/download (1).png" 
                    alt="test" 
                    width={100} 
                    height={100}
                    className=" w-10 h-10 rounded-lg" 
                  />
                </div>
            </div>



      </div>

    </div>
  </div>
</div>

  );
}

export default App;
