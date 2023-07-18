import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import logo from "../../assets/main.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import Services from "../Services/Services";
import Line from "../../components/Line/Line";

function LandingPage({ setSelectedPage }) {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="home"
      className={
        "md:flex md:items-center md:justify-between md:h-full gap-16 py-10"
      }
    >
      {/*image Section*/}
      <div
        className={
          "md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {isAboveMedium ? (
            <div
              className={
                "relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-top-[400px] before:w-full before:max-w-[400px] before:h-full  before:z-[-1]"
              }
            >
              <img
                className={
                  "hover:filter hover: saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                }
                src={logo}
                alt="logo"
              />
            </div>
          ) : (
            <img
              className={
                "hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              }
              src={logo}
              alt="logo"
            />
          )}
        </motion.div>
      </div>
      {/* Main Menu */}
      <motion.div
        className={"z-30 basis-2/5 mt-12 md:mt-22"}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className={
            "text-6xl text-white font-playFair z-10 text-center md:text-start"
          }
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition
        >
          Transforming Ideas into Reality, Empowering Businesses to Thrive{" "}
        </motion.p>

        <motion.div
          className="mt-10 md:ml-0 w-full md:w-full justify-center"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <AnchorLink
            href="#contact"
            onClick={() => setSelectedPage("contact")}
            className=" text-gray-400 border border-white px-10 py-3 md:w-full   rounded-sm font-semibold hover:text-white transition duration-500"
          >
            Contact
          </AnchorLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LandingPage;
