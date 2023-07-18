import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Line from "../../components/Line/Line";
import service1 from "../../assets/mobile.png";
import service2 from "../../assets/web.png";
import service3 from "../../assets/Ui.png";
import service4 from "../../assets/graphic.png";
import service5 from "../../assets/markeet.png";
import service6 from "../../assets/outsourse.png";

function Services() {
  const cardsData = [
    {
      id: 1,
      title: "Mobile App Development",
      icon: service1,
    },
    { id: 2, title: "Web Development", icon: service2 },
    { id: 3, title: "UI/UX Design", icon: service3 },
    { id: 4, title: "Graphic Designing", icon: service4 },
    { id: 5, title: "Digital Marketing", icon: service5 },
    {
      id: 6,
      title: "Developer Outsourcing",
      icon: service6,
    },
  ];
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.section
      id="services"
      className="pd-24 pt-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:flex md:justify-center md:gap-16 mt-32">
        <p className="font-openSans font-semibold text-4xl mb-5 tracking-wide">
          Services
        </p>
      </div>
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <div className="md:flex md:justify-between mt-16 md:gap-32 w-full">
          <div
            className={`flex flex-wrap ${
              isAboveMedium ? "justify-center" : "justify-between"
            }`}
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                className={`w-full ${
                  isAboveMedium ? "md:w-1/3" : "md:w-1/2"
                } lg:w-1/4 ${isAboveMedium ? "px-4" : "px-2"} mb-8 md:mb-3`}
              >
                <div className="bg-white rounded-lg shadow-md p-2 max-w-[20rem] mx-auto">
                  <img
                    src={card.icon}
                    alt="service"
                    className="w-full h-auto object-contain mx-auto mb-4"
                    style={{ maxHeight: "10rem" }}
                  />
                  <p className="font-openSans text-black font-semibold text-1xl mb-2 text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
