import React from "react";
import { motion } from "framer-motion";
import Line from "../../components/Line/Line";
import logoStack from "../../assets/stack.png";
import logoUs from "../../assets/about.png";

function AboutUs() {
  return (
    <motion.section
      id="about"
      className="px-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
      <div className="md:flex md:justify-center md:gap-16 mt-32">
        <p className="font-openSans font-semibold text-4xl mb-5 tracking-wide">
          About Us
        </p>
      </div>
      <div className="md:flex flex-col md:justify-between md:gap-16 mt-32">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 mb-4">
              Softinnovos is a forward-thinking tech company with a primary
              focus on building a strong and impactful online presence for
              businesses. Through our innovative solutions and cutting-edge
              technologies, we empower companies to thrive in the digital
              landscape. With a team of passionate experts, we create and
              optimize captivating websites, design engaging user interfaces,
              develop robust web and mobile applications, and implement
              effective digital marketing strategies. Our relentless pursuit of
              excellence ensures that our clients stay ahead of the competition,
              connecting with their target audiences and achieving remarkable
              success in the dynamic online world. At Softinnovos, we are driven
              by the belief that a compelling online presence is the key to
              unlocking unlimited growth opportunities for businesses in the
              digital age.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={logoUs}
              alt="Circle"
              className=" w-66 h-[300px] md:ml-[40%]"
            />
          </div>
        </div>
      </div>
      <div className="md:flex flex-col md:justify-between md:gap-16 mt-32">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              What Are Our Tech Stacks
            </h2>
            <p className="text-gray-600 mb-4">
              We pride ourselves on our cutting-edge tech stack, which includes
              React and React Native for dynamic web and mobile applications,
              Node.js and Express.js for robust backend solutions, MongoDB for
              scalable data management, and Flutter & Ionic for cross-platform
              Android and iOS development. Our team's expertise in JavaScript,
              TypeScript, and Figma ensures that we deliver exceptional,
              user-friendly solutions that surpass expectations. Join us on this
              innovative journey as we turn your digital visions into reality!
            </p>
          </div>
          <div className="md:w-1/3 ">
            <img
              src={logoStack}
              alt="Circle"
              className=" w-[300px] h-[300px]  md:ml-[30%]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
