import React from "react";
import Footer from "../Shared/Footer/Footer";
import bodyBuilder from "../About/images/profile.jpg";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import "./Blogs.css";
import TitlePage from "../../Hooks/TitlePage";
const Blogs = () => {
  return (
    <div className="text-light service-bg py-5">
      <TitlePage title="Blog -body builders" />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <h3 className="title-blog">
              TRAINING <span>AND 3 STORIES OF SUCCESS</span>{" "}
            </h3>
            <p className="date">11 March 2022</p>
            <p className="blog-title">
              Starting in the gym with a personal trainer makes you being
              definitely a step closer to success. Having the help of a
              qualified professional, who can give you tips, guides and
              motivation, is the push that we often need to start a new year
              full of purposes and obligations. Work, family, studies... The
              day-to-day life may seem to be against us when we talk about being
              active and going to the gym, but we have 3 examples and good
              stories that will tell you how you can change it. Let's hope
              they’ll inspire you.
            </p>
            <span className="body-mind">body & mind</span>
          </div>
          <div className="col">
            <img src={bodyBuilder} alt="" />
          </div>

          {/* end of row */}
        </div>
        <div className="col story py-5">
          <h1 className="">STORY 1</h1>
          <p>
            My name is Jose Luis Patier. I am a doctor, 61 years old and I work
            in a hospital in Madrid. I would like to make you participate in my
            history: my experience in the world of fitness and my fight against
            Covid-19. I had been training with my personal trainer, Javier
            Morillo (great coach and, now, friend), with the aim of achieving a
            healthier body in every way. In a few weeks - months I achieved a
            significant improvement in my fitness and muscle recovery. But I
            fell ill as a result of Covid-19. Severe bilateral pneumonia quickly
            brought me to intensive care services (UCI). My health was critic. A
            respirator fully and automatically maintained my breathing movements
            until the treatment took effect and I was able to begin to wake up.
            Then the miracle appeared. Because "to breathe again you just need
            to have your tube removed, although this can't be done right away."
            The development of the various muscles of my chest and the general
            physical and nutritional form managed to save my life and helped me
            to fight with the Covid. After 8 long days I managed to get rid of
            that machine that for a while kept me alive. Therefore, Javier's
            work was visible, as one more ally and I have subsequently thanked
            him from the heart. He helped save my life unequivocally. the gym as
            a means of cult of the body, but the truth is that it is much more.
            He gave me the tools to finally breathe alone, and from here I
            encourage you all to reflect on the care of our bodies in the hands
            of professionals. My body, healthier than ever, subjected me to
            life. Thank you, Javier!
          </p>
          <i>José Luis Patier – Doctor</i>

          <div className="story2 pt-4">
            <h1>STORY 2</h1>
            <p>
              Going to the gym had been always like a waste of time for me. On
              one hand, I didn't like bodybuilding machines or practiced indoor
              sport very much. And, on the other hand, I lost my motivation
              because I hadn’t seen any evolution before. But starting to train
              with Javi changed my perception completely. We started with
              functional exercises focused on my weaker muscles and it helped me
              to change the boring idea of going to the gym. So, I started
              enjoying that "new sport," different from what I'd always done.
              Also, since the first trimester I started to see results and now
              I'm motivated and I've changed my habits. Going to training I no
              longer see it as a burden, but as a necessity that I enjoy.
            </p>
            <i>Miguel Martínez - IT Business Partner</i>
          </div>
          <div className="story3 pt-4">
            <h1>STORY 3</h1>
            <p>
              I started with Javier when I realized I needed a professional to
              help me accomplish my goals. He's the best. Every week in every
              workout takes me by the hand and prompts me to be better improving
              my fitness condition. Without doubts, it has been the best
              decision I took and that reinforces my theory that all of us need
              a professional coach who will support us in our daily routines and
              give us the encouragement and discipline we need to be consistent
              and get the results we want. A personal trainer is the one who
              could help you to integrate exercise into your lifestyle.
            </p>
            <i> Jennypher Nava – Finacial Audit Supervisor</i>
          </div>
          {/* end of story articles */}
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
          <div className="col pb-5">
            <div className="img">
              <img src={blog1} className="w-100 img-fluid" alt="" />
              <div className="title-enter-blog p-3">
                <span>body & mind</span>
                <h3>THE STORY OF IRINI</h3>
                <small>what do you mean to thin? that's for me say!</small>
                <i style={{ textAlign: "right" }}>read more</i>
              </div>
            </div>
          </div>
          <div className="col pb-5">
            <div className="img">
              <img src={blog3} className="w-100 img-fluid" alt="" />
              <div className="title-enter-blog p-3">
                <span>body & mind</span>
                <h3>KEEP TRAINING INTERESTING</h3>
                <small>Does exercising sometimes bore you? Here!</small>
                <i style={{ textAlign: "right" }}>read more</i>
              </div>
            </div>
          </div>
          <div className="col pb-5">
            <div className="img">
              <img src={blog2} className="w-100 img-fluid" alt="" />
              <div className="title-enter-blog p-3">
                <span>body & mind</span>
                <h3>WARMING UP GOOD WORKOUT</h3>
                <small>Warming up before a workout is vital to your.</small>
                <i style={{ textAlign: "right" }}>read more</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5"></p>
      <Footer />
    </div>
  );
};

export default Blogs;
