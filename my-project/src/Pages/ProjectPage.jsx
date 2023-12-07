import React, { useEffect } from "react";
import ProjectOne from "../Components/ProjectOne";
import { Card } from "@mui/material";
import ProjectTwo from "../Components/ProjectTwo";
import ProjectThree from "../Components/ProjectThree";
import ProjectFive from "../Components/ProjectFive";
import ProjectFour from "../Components/ProjectFour";
import ProjectSix from "../Components/ProjectSix";
import AOS from "aos";
import "aos/dist/aos.css";
function ProjectPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Card sx={{ marginTop: "30px", paddingBottom: "50px" }}>
      <div class="flex justify-center">
        <div class="text-center md:max-w-xl lg:max-w-3xl">
          <h2 class="mb-12 px-6 text-3xl font-bold">Project</h2>
        </div>
      </div>
      <div className="md : flex justify-evenly items-center flex-wrap gap-4 mx-4">
        <div data-aos="zoom-in-right">
          <ProjectOne></ProjectOne>
        </div>
        <div data-aos="zoom-in-down">
          <ProjectTwo></ProjectTwo>
        </div>
        <div data-aos="zoom-in-left">
          <ProjectThree></ProjectThree>
        </div>
        <div data-aos="zoom-in-right">
          <ProjectFour></ProjectFour>
        </div>
        <div data-aos="zoom-in-up">
          <ProjectFive></ProjectFive>
        </div>
        <div data-aos="zoom-in-left">
          <ProjectSix></ProjectSix>
        </div>
      </div>
    </Card>
  );
}

export default ProjectPage;
