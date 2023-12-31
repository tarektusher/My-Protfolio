import React from "react";
import img from "../assets/mypic.jpeg";
import { Button, Card, Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutPage() {
  React.useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Card>
      <div className="mt-10" id="about">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-12 px-6 text-3xl font-bold">About</h2>
          </div>
        </div>
        <div  className="mx-24 mb-10 md:flex justify-between items-center gap-12">
          <div data-aos="zoom-in" >
            <img 
              style={{ height: "400px", width: "400px", borderRadius: "10px" }}
              src={img}
              className=" shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="My Pic"
            />
          </div>
          <div ata-aos="fade-left" className="text-left p-5">
            <Typography  variant="h4" className="text-4xl">
              Hi There! I'm Tarek Hossain Tusher
            </Typography>
            <Typography variant="h5" className="pt-2 pb-2 text-mainColor">
              Software Engineer
            </Typography>
            <p  className="text-xl text-sColor">
              I'm a Full Stack Developer. I'm Working on MERN AND PERN Stack.
              <br /> I'm passionate about Competetive Programming. I solve more
              than 3000 problems in various judge. I attend more than 300 online 
              contest and more than 20 onsite Contest.
            </p>
            <div className="align-middle mt-7">
              <Button
                variant="contained"
                target="_blank"
                href="https://drive.google.com/file/d/15Tsv2kd1faAif5Ck2_9atrmyqE5x3ZGT/view?usp=sharing"
                sx={{
                  background: "#028D8D",
                  ":hover": { backgroundColor: "#24bcbf" },
                }}
              >
                DownLoad CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AboutPage;
