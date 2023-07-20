import React, { useState, useEffect } from "react";
import "./style.css";
import '../pages/home/style.css';
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import logoBlack from "../assets/images/logoHead.png"
import logowhite from "../assets/images/logoblack.png"
import {  IoLogoLinkedin, IoLogoWhatsapp, IoMdClose, IoMdMenu } from 'react-icons/io';

const Headermain = ({isTopOfPage}) => {
  const [isActive, setActive] = useState(true);
  const [isAboveSmall, setIsAboveSmall] = useState(false);
  const navBackground = isTopOfPage ? "bg-black" : "bg-white";
   const textChange=isTopOfPage ? "text-white" : "text-black";
  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsAboveSmall(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Set initial value on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`fixed-top site__header ${navBackground}`}>
        <div className=" d-flex align-items-center justify-content-between">
          {!isAboveSmall ? (
            <button className={ `flex-row ${navBackground} border-0`}>
                {/* <ReactSvg src={isTopOfPage ? svgwhite :svgblack} alt="svg"/> */}

            <RouterLink className={`${navBackground} ${textChange} navbar-brand nav_ac`} to="home">
              {logotext}
            </RouterLink>
            </button>
          ) : (
<button className={`${navBackground} ${textChange} flex-row border-0`}>
<img src={isTopOfPage ? logoBlack :logowhite} style={{width:50,height:45, position:"relative"}} alt="svg"/>
            <ScrollLink
              to="home"
              smooth={true}
              duration={200}
              className={`${navBackground} ${textChange} navbar-brand nav_ac`}
            >
              {logotext}
              
            </ScrollLink>
            </button>
          )}
          {isAboveSmall ? (
            <div className="d-flex gap-4  align-items-center">
<button className={`${navBackground} ${textChange} border-0`}>
              <ScrollLink
                to="home"
                smooth={true}
                duration={200}
                className={`my-3 fw-bold text-decoration-none ${textChange}`}
              
              >
                Home
               
              </ScrollLink>
              
            </button>
            <button className={`${navBackground} ${textChange} border-0`}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={200}
                className={`my-3 fw-bold text-decoration-none ${textChange}`}

              >
                About
              </ScrollLink>
            </button>
            <button className={`${navBackground} ${textChange} border-0`}>
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={200}
                className={`my-3 fw-bold text-decoration-none ${textChange}`}

              >
                Services
              </ScrollLink>
            </button>
 
            <button className={`${navBackground} ${textChange} border-0`}>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={200}
                className={`my-3 fw-bold text-decoration-none ${textChange}`}

              >
                Contact
              </ScrollLink>
            </button>
          </div>
          
          ) : (
            <div className="d-flex align-items-center">
            </div>
          )}
          {!isAboveSmall && (
            <button className={`  nav_ac bg-transparent border-0 `} onClick={handleToggle}>
  {!isActive ? <IoMdClose color={isTopOfPage ? 'white' : 'white'} /> : <IoMdMenu color={isTopOfPage ? 'white' : 'black'}/>}
            </button>
          )}
        </div>

        <div
          className={` site__navigation ${!isActive ? "menu__opend" : ""}`}
        >
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <ScrollLink
                      onClick={handleToggle}
                      to="home"
                      smooth={true}
                      duration={200}
                      className="my-3"
                    >
                      Home
                
                    </ScrollLink>
                  </li>
                  <li className="menu_item">
                    <ScrollLink
                      onClick={handleToggle}
                      to="about"
                      smooth={true}
                      duration={200}
                      className="my-3"
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li className="menu_item">
                    <ScrollLink
                      onClick={handleToggle}
                      to="portfolio"
                      smooth={true}
                      duration={200}
                      className="my-3"
                    >
                      Services
                    </ScrollLink>
                  </li>
            
                  <li className="menu_item">
                    <ScrollLink
                      onClick={handleToggle}
                      to="contact"
                      smooth={true}
                      duration={200}
                      className="my-3"
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">  
              <a href={socialprofils.whatsap}><IoLogoWhatsapp color="lightgreen" size={60}/></a>
              <a href={socialprofils.linkedin}> <IoLogoLinkedin color="lightblue" size={60}/></a>
            </div>
            <p className="m-0">
              &copy; {new Date().getFullYear()} {logotext}
            </p>
          </div>
        </div>
      </header>

    </>
  );
};

export default Headermain;
