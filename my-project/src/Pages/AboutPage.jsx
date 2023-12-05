import React from "react";
import img from "../assets/mypic.jpeg"
import { Typography } from "@mui/material";
function AboutPage() {
  return (
    <div className="mt-10" id= "about">
      <h1 className="text-6xl text-mainColor">About me</h1>
      <div className="m-20 md:flex justify-between items-center gap-12">
        <div >
          <img style={{height : '400px', width : '400px', borderRadius : '10px'}} src={img} className=" shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="My Pic" />
        </div>
        <div className="text-left p-5">
          <Typography variant="h4" className="text-4xl" >Hi There! I'm Tarek Hossain Tusher</Typography>
          <Typography variant="h5" className="pt-2 pb-2 text-mainColor">Software Engineer</Typography>
          <p className="text-xl text-sColor">
            I'm a Full Stack Developer. I'm Working on MERN AND PERN Stack.<br/> I'm
            passionate about Competetive Programming. I solve more than 3000
            problems in various judge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
