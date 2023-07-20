import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link as RouterLink } from "react-scroll";
import {MovingComponent} from 'react-moving-text';
import logo from '../../assets/images/logo.png'
export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
        <div className="w-75 h-75 mt-5 order-1 order-lg-1 h-100">
    {/* Image aligned to the right for web */}
    <img src={logo} className="img-fluid d-none d-lg-block h-100" />
  </div>
    <div className="align-self-center">
      <div className="intro mx-auto">
        <h1 className="fluidz-48 p-5 mb-1x">
          Transforming Ideas into Reality, Empowering Businesses to Thrive
        </h1>
        <div className="intro_btn-action pb-5 p-5">
          <RouterLink to="contact">
            <div id="button_h" className="ac_btn btn">
              Contact Me
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div className="w-100 d-lg-none">
    {/* Image aligned to the right for mobile */}
    <img src={logo} className="img-fluid h-100" />
  </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
