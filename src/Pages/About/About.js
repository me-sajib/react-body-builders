import React from "react";
import TitlePage from "../../Hooks/TitlePage";
import Footer from "../Shared/Footer/Footer";
import profileImage from "./images/profile.jpg";

const About = () => {
  return (
    <div className="service-bg py-5 text-light">
      <TitlePage title="about - body builders" />
      <div className="container">
        <h1 className="text-center text-light pb-5">About Me</h1>
        <div className="about-info">
          <div className="row">
            <div className="col-md-6">
              <img src={profileImage} className="w-100 img-fluid h-75" alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="text-info">Stay Focused on training</h2>
              <p>
                My name is Jose <b> Luis Patier</b>. I am a doctor, 61 years old
                and I work in a hospital in Madrid. I would like to make you
                participate in my history: my experience in the world of fitness
                and my fight against Covid-19. I had been training with my
                personal trainer, Javier Morillo (great coach and, now, friend),
                with the aim of achieving a healthier body in every way. In a
                few weeks - months I achieved a significant improvement in my
                fitness and muscle recovery. But I fell ill as a result of
                Covid-19. Severe bilateral pneumonia quickly brought me to
                intensive care services (UCI). My health was critic. A
                respirator fully and automatically maintained my breathing
                movements until the treatment took effect and I was able to
                begin to wake up. Then the miracle appeared. Because "to breathe
                again you just need to have your tube removed, although this
                can't be done right away." The development of the various
                muscles of my chest and the general physical and nutritional
                form managed to save my life and helped me to fight with the
                Covid. After 8 long days I managed to get rid of that machine
                that for a while kept me alive. Therefore, Javier's work was
                visible, as one more ally and I have subsequently thanked him
                from the heart. He helped save my life unequivocally. the gym as
                a means of cult of the body, but the truth is that it is much
                more. He gave me the tools to finally breathe alone, and from
                here I encourage you all to reflect on the care of our bodies in
                the hands of professionals. My body, healthier than ever,
                subjected me to life. Thank you, Javier! José Luis Patier –
                Doctor
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
