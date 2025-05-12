import React from "react";
import { VscGlobe } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";


document.title = "Ekana : Home";

export default function Home() {

  return <>

    {/* Navbar Starting */}
        <div className="bg-white flex flex-row items-center justify-between px-3 md:px-10 py-2">

            <div>
                <img className="md:h-[70px] h-[60px]" src="/logo.png" alt="Image Not Found..." />
            </div>

            <ul className="flex flex-row gap-6 items-center">
                <li >
                    <button className="flex flex-row items-center hover:cursor-pointer hover:scale-[1.05]"><VscGlobe size={18} className="mt-1" />  En</button>
                </li>

                <li >
                    <button className="flex flex-row items-center hover:cursor-pointer hover:scale-[1.05]">Login</button>
                </li>

                <li >
                    <button className="flex flex-row items-center bg-[#666666] hover:bg-gray-400 px-3 py-1 rounded-sm shadow text-white font-[400] hover:cursor-pointer hover:scale-[1.05]">Signup</button>
                </li>
            </ul>
        


        </div>
  {/* Ending of Navbar */}

  {/*Static Carousel Section */}

  <div style={{background:"url('/carousel-place-img.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"contain"}} className="w-full h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px]  bg-rose-700  flex flex-row items-center "  >

    <div className="ps-5  md:ps-18 w-[55%] md:w-[55%] mb-[70px] sm:mb-[80px] md:mb-[120px] xl:mb-[100px]">
        <h2 className="text-[#28A745] font-bold text-[12px]  xl:text-[35px] md:text-[26px]">Lorem ipsum dolor sit amet.</h2>
        <span className="text-justify text-[8px] sm:text-[12px] md:text-[14px] xl:text-[20px] text-base/5 " style={{lineHeight:1}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sunt harum voluptatem eligendi et. Lorem ipsum dolor sit amet.</span>
    </div>
    

  </div>

  {/* Closing of Static Caousel Section */}


  <div className="flex flex-row justify-center items-center text-[30px] font-semibold">
    <span className="text-[#2bb04a]">What you looking for?</span>
  </div>

  <div className="flex flex-row justify-center items-center gap-30  mt-10 mb-10">

        <div className="flex flex-col justify-center items-center border-[2px] w-[400px] rounded py-3 border-[#2e2e2e] hover:cursor-pointer hover:scale-[1.02] hover:shadow transition-all">
        <span className="text-[22px] font-semibold  text-[#2bb04a]">You are a fundi?</span>

        <div className="bg-[#2bb04a] mt-2 h-15 w-15 items-center rounded-4xl flex justify-center">
            <MdOutlineScreenSearchDesktop size={28} color="white" />
        </div>

        <button className="px-5 hover:cursor-pointer font-semibold py-1 rounded hover:shadow mt-2 bg-[#f4f4f4] text-[#2e2e2e]">Get Started</button>
        <span className="mt-2 text-[#666666]">Advertise your skills!</span>
        
        

       </div>

      <div className="flex flex-col justify-center items-center border-[2px] w-[400px] rounded py-3 border-[#2e2e2e] hover:cursor-pointer hover:scale-[1.02] hover:shadow transition-all">
        <span className="text-[22px] font-semibold  text-[#2bb04a]">Find a fundi</span>

        <div className="bg-[#2bb04a] mt-2 h-15 w-15 items-center rounded-4xl flex justify-center">
            <MdOutlineScreenSearchDesktop size={28} color="white" />
        </div>

        <button className="px-5 hover:cursor-pointer font-semibold py-1 rounded hover:shadow mt-2 bg-[#f4f4f4] text-[#2e2e2e]">Find Now</button>
        <span className="mt-2 text-[#666666]">Your are looking for a reliable fundi?</span>
        
        

       </div>


  </div>


  <div className="flex justify-center items-center text-[30px] font-semibold">
    <h1 className="text-[#2bb04a]">Home ★ Office ★ Apartment</h1>
  </div>

  <div className="flex flex-row justify-center items-center gap-30  mt-10 mb-10 px-50 text-center">
    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium sed culpa. Voluptatibus provident sed cupiditate, ad accusantium aut id natus placeat. Quam quibusdam, nesciunt cum eaque corrupti laudantium expedita officia deserunt ipsam quae est iste incidunt architecto! Natus ducimus commodi aliquid dolorem, minima tempore aut. Doloremque animi suscipit aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat asperiores possimus unde expedita vel!</span>
  </div>


  <div className="flex justify-center items-center text-[30px] font-semibold">
    <h1 className="text-[#2bb04a]">Popular Category</h1>
  </div>


  <div className="px-65 mt-10 flex items-center justify-between flex-row">

    <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/plumbing.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Plumbing</span>
    </div>


    


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/electric-work.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Electric Work</span>
    </div>


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/carpentary.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Carpentry</span>
    </div>



     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/cleaning-services.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Cleaning Services</span>
    </div>


    

  </div>



   <div className="px-100 mt-10 flex items-center justify-between flex-row">

    <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/painting.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Painting</span>
    </div>


    


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/gardening.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Gardening & Landscaping</span>
    </div>


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/repairing.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Appliance Repair</span>
    </div>



    

  </div>




   <div className="px-65 mt-10 flex items-center justify-between flex-row">

    <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/constructor.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Construction & Masonary</span>
    </div>


    


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/vichels.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Vehicle Repair & Maintenance</span>
    </div>


     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/tutors.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Tutoring</span>
    </div>



     <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex justify-center ring-2 ring-offset-4 ring-[#2bb04a]  items-center" style={{background:"url('/Category/laywers.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </div>
        <span className="text-[#2bb04a] mt-2  text-[18px]">Lawyers</span>
    </div>


    

  </div>


  {/* Footer Starting */}

    <div className="flex flex-row justify-between items-center bg-[#121619] py-3 px-5 mt-10">
        <img src="./logo.png" className="h-[80px]" alt="Logo Not Found..." />


        <div>
            <ul>
                <li className="text-[#2bb04a] text-[20px] font-semibold flex flex-row items-center justify-end me-5 gap-5">
                <button className="hover:cursor-pointer hover:scale-[1.05]">
                        <RiInstagramFill size={25} />
                    </button> 

                    <button  className="hover:cursor-pointer hover:scale-[1.05]">
                        <FaFacebook size={24} /> 
                    </button>

                    <button  className="hover:cursor-pointer hover:scale-[1.05]">
                        <AiFillTwitterCircle size={28} />
                    </button>

                </li>

                <li className="flex flex-row items-center gap-2 my-2">
                    <button className="hover:cursor-pointer">
                        <img src="/store-img/Google Play.png" className="w-[150px]" alt="Image not found..." />
                    </button>

                    <button className="hover:cursor-pointer">
                        <img src="/store-img/App Store.png" className="w-[150px]" alt="Image not found..." />
                    </button>
                </li>
                
                <li className="text-[#f4f4f4] text-[15px]  flex justify-end gap-5">
                    <button className="hover:cursor-pointer">Privacy Policy</button> <button className="hover:cursor-pointer">Terms of Service</button>
                </li>
            </ul>
        </div>
    </div>

  {/* Footer Ending */}

  </>
}