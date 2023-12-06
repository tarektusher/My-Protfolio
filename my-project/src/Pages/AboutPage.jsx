import React from "react";
import img from "../assets/mypic.jpeg";
import { Button, Card, Typography } from "@mui/material";
function AboutPage() {
  return (
    <Card>
    <div className="mt-10" id="about">
      <p className="text-6xl text-mainColor">About me</p>
      <div className="m-24 md:flex justify-between items-center gap-12">
        <div>
          <img
            style={{ height: "400px", width: "400px", borderRadius: "10px" }}
            src={img}
            className=" shadow-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="My Pic"
          />
        </div>
        <div className="text-left p-5">
          <Typography variant="h4" className="text-4xl">
            Hi There! I'm Tarek Hossain Tusher
          </Typography>
          <Typography variant="h5" className="pt-2 pb-2 text-mainColor">
            Software Engineer
          </Typography>
          <p className="text-xl text-sColor">
            I'm a Full Stack Developer. I'm Working on MERN AND PERN Stack.
            <br /> I'm passionate about Competetive Programming. I solve more
            than 3000 problems in various judge.
          </p>
          <div className="align-middle mt-7">
            <Button
              variant="contained"
              target="_blank"
              href="https://drive.google.com/file/d/15Tsv2kd1faAif5Ck2_9atrmyqE5x3ZGT/view?usp=sharing"
              sx={{
                background: "#24BFA7",
                ":hover": { backgroundColor: "#24bcbf" },
              }}
            >
              DownLoad CV
            </Button>
          </div>
        </div>
      </div>
    </div></Card>
  );
}

export default AboutPage;
