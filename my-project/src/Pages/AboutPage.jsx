import React from "react";
function AboutPage() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-mainColor">About me</h1>

      <div className="md : flex justify-between items-center gap-12">
        <div>
          <img src="my pic.jpeg" alt="My Pic" />
        </div>
        <div>
          <h1>Hi There! I'm Tarek Hossain Tusher</h1>
          <h3>Software Engineer</h3>
          <p>
            I'm a Full Stack Developer. I Working on MERN AND PERN Stack. I'm
            passionate about Competetive Programming. I solve more than 3000
            problems in various judge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
