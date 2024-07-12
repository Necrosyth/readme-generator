"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../utils/cn";
import "./Hero.css";
import { GlobeDemo } from "../ui/GlobeDemo";



export function Hero() {
  return (
    <>
    
  
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">

      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
<Boxes />

      <div className="landing text-white z-20 pointer-events-none" >
      <header class="flex flex-col items-center justify-center p-2">
        <img src="./logo-no-background.png" class="w-72 h-28 mb-8" alt="img not found" />
    
    
    </header>         <div className="-mt-32 ">


                <div className="landing-center">
                    <div className="landing-left px-20 ">

               
            
              
                    <p className="font-serif mt-16 ">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    RapidReadMe
                  </h2>
               
                  is a user-friendly tool that simplifies the process of creating README.md files for your Github profile. With RapidRead, you can easily create a README file that showcases your projects, skills, and interests.
                    </p>
                {/* <button id="start" onClick={()=>navigate("/create-readme")}>Create Readme</button> */}
                <button className="mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 pointer-events-auto">
         Create Readme
        </button>
     
                    </div >
                    

                   
    <GlobeDemo/>
                    
                </div>
            </div>
    </div>
    </div>
    </>
  );
}
