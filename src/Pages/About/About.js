import React from "react";
import profileImage from "./images/profile.jpg";

const About = () => {
  return (
    <div className="service-bg py-5 text-light">
      <div className="container">
        <h1 className="text-center text-light pb-5">About Me</h1>
        <div className="about-info">
          <div className="row">
            <div className="col-md-6">
              <img src={profileImage} className="w-100 img-fluid h-75" alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="text-info">Stay Focused on MISSION 2022</h2>
              <p>
                This year i will be a web developer and anyway i will get a job
                in the future. My Mission To continue to learn and improve my
                skills To become the best developer. <br /> <br /> i can be To
                build my dream career, <br /> My only goal is to become a good
                developer. I have only one vision, I will be a good developer,
                and I will do a lot of good quality work, I will get a job in a
                good company that's way i'm working hard for this. <br /> <br />{" "}
                Self-learning is an important part of the learning process, I
                always try to learn something new and keep updated myself to the
                latest technology. it's very challenging.
                <br />
                Having a goal and working to complete it can improve my job
                satisfaction of me. By establishing goals, i can create a sense
                of purpose in my career
                <br /> <br />
                mentorship, sharing support, sharing tools, code reviews,
                answering questions, and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
