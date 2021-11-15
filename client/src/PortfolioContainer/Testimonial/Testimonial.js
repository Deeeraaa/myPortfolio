import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "../Testimonial/Testimonial.css"
// import lady from "../../assets/Testimonial/lady.png";
// import mike from "../../assets/Testimonial/mike.png";
// import man from "../../assets/Testimonial/man.png";
import shape from "../../assets/Testimonial/shape-bg.png";

import js from "../../assets/Testimonial/js1.png"
import react from "../../assets/Testimonial/react1.jpg"
import bootstrap from "../../assets/Testimonial/bootstrap.jfif"
import css from "../../assets/Testimonial/css.png"
import html from "../../assets/Testimonial/html.png"
import ps from "../../assets/Testimonial/photoshop.png"



export default function Testimonial(props) {
     let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        },
    };

  return (
    <div>
      <ScreenHeading
        title={"Skills"}
        subHeading={"Highlights of my skillset"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
                      <OwlCarousel
                          className="owl-carousel"
                          id="testimonial-carousel"
                          {...options}
                      >
                          <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <img src={js} alt="javascript loggo" className="img" />
                  </div>
                  
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                    <img src={react} alt="react loggo" className="img" />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                    <img src={bootstrap} alt="react loggo" className="img" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                    <img src={css} alt="react loggo" className="img" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                    <img src={html} alt="react loggo" className="img" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                    <img src={ps} alt="react loggo" className="img" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
          </section>
          <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
