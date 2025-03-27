import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <div className="w-56 fixed h-full bg-yellow-600 border-r border-gray-300 flex flex-col justify-start items-center gap-4 py-4">
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
    <div className="h-16 fixed w-[calc(100%-6rem)] bg-red-600 flex items-center justify-between px-4">
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
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-kLLXSd JQQmO">
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

        <div className=" col-span-12 flex flex-col gap-4 bg-gray-100 py-8 pl-8">
        {/* Dynamic Content */}
       
        <div className=" flex justify-between items-center bg-blue-500">
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


          {/* hadi offer  */}
        <div  className=" bg-green-500 border border-[#94a3b8] rounded-xl p-6 group hover:cursor-pointer">

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
                   <h1 className=" text-2xl font-extralight underline text-blue-700 hover:cursor-pointer "> CapGimini</h1>
                 </div> 

                 <div className=" flex justify-between items-center">
                   <h1 className=" text-lg text-[#94a3b8]"> SENIOR </h1>
                   <div className=" flex justify-center items-center gap-4">
                     <h1 className=" text-lg font-light text-[#94a3b8]"> 12000 / annual </h1>
                     <button className=" px-6 py-2 rounded-full bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-600">Apply</button>
                   </div>
                 </div>

                 <div className=" flex justify-start items-center gap-4 my-5">
                   <h1 className=" text-xl text-blue-950">DEVELOPPEUR FULLL STACK </h1>

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
                     <p className="font-normal"> ANASO  Profile match</p>
                   </div>
                 </div>

                  <div className=" flex justify-start items-center gap-4">
                      <div >
                        <p className=" px-5 py-1 rounded-2xl bg-gray-500 bg-opacity-20 text-blue-950 font-medium w-fit "># GIT</p>
                        <p className=" px-5 py-1 rounded-2xl bg-gray-500 bg-opacity-20 text-blue-950 font-medium w-fit "># DOCKER</p>
                        <p className=" px-5 py-1 rounded-2xl bg-gray-500 bg-opacity-20 text-blue-950 font-medium w-fit "># REACT</p>
                      </div>
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
                     <p className=" group-hover:text-[#04004E] text-[#778292] "> CDI </p>
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
                     <p className=" group-hover:text-[#04004E] text-[#778292]"> Notchup - Client </p>
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
                          
                     <p className=" group-hover:text-[#04004E] text-[#778292]"> MOROCCO </p>
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
                     <p className=" group-hover:text-[#04004E] text-[#778292]"> casablonca </p>
                   </div>
                   <div className=" flex justify-start items-center gap-2">
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9C17 13.4186 13.4186 17 9 17C4.58141 17 1 13.4186 1 9C1 4.58141 4.58141 1 9 1C13.4186 1 17 4.58141 17 9Z" stroke="#04004E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                       <path d="M10.9985 6.97669C10.9985 6.61685 10.8732 5.67534 9.99997 5.24352C8.2914 4.3986 6.56116 5.89716 7.10686 7.51645C7.65256 9.13573 11.0811 8.56591 10.9985 11.0621C10.916 13.5584 7 13.8749 7 10.6364M9 5V4M9 14V13" stroke="#04004E" stroke-width="1.5" stroke-linecap="round"></path>
                     </svg>
                     <p className=" group-hover:text-[#04004E] text-[#778292]"> 12000 / annual</p>
                   </div>
                  </div>

                 <div className=" flex justify-between items-center py-2 pt-4">
                   <div className=" flex justify-start items-center gap-2">
                     <img 
                       src={logo} 
                       alt="test" 
                       width={100} 
                       height={100}
                       className=" w-10 h-10 rounded-lg border border-gray-300" 
                     />
                     <h1 className=" flex justify-start items-center gap-3 text-[#94a3b8]"> CapGimini  <div className=" w-1.5 h-1.5 rounded-full bg-[#94a3b8] "></div> CASABLONCA </h1>
                   </div>
                   <div className="">
                     <h1 className=" text-[#94a3b8] text-lg">Job id: 54321 </h1>
                   </div>
                 </div>

               </div>           
        </div>


    </div>
  </div>
</div>

  );
}

export default App;
