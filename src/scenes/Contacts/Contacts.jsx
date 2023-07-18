import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Line from "../../components/Line/Line";
import { FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa"; // LinkedIn icon
import contactUsImage from "../../assets/contactus.png";

function Contacts() {
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const formRef = useRef();
  const handleWhatsAppLink = () => {
    const whatsappNumber = "+923369762916"; // Replace with your WhatsApp number
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
  };

  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted

    emailjs
      .sendForm(
        "service_n76vfm8",
        "template_2ght4gq",
        e.target,
        "ZYoEeX2TFJgiGxfaA"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Do something on success
        },
        (error) => {
          console.log(error.text);
          // Do something on error
        }
      )
      .finally(() => {
        setIsLoading(false); // Set loading back to false after email sending is complete (success or error)
        reset(); // Clear form fields after form submission is complete
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-8 md:py-48 md:flex md:items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-openSans font-semibold text-4xl mb-5 tracking-wide">
            Contact
          </p>
          {isLoading ? ( // If loading, show the white circular loader
            <div className="loader h-10 w-10 border-4 border-solid border-white border-t-4 rounded-full animate-spin mx-auto"></div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="flex flex-col">
              <input
                className="w-full md:w-[100%] text-white bg-black  rounded-sm mt-10 border border-white font-semibold placeholder-opaque-black p-3"
                type="text"
                name="from_name"
                placeholder="Name"
                {...register("from_name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className=" text-red-700 mt-1">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char. "}
                </p>
              )}
              <input
                className="w-full md:w-[100%] text-white bg-black rounded-sm mt-10 border border-white font-semibold placeholder-opaque-black p-3"
                type={"text"}
                name="email_id"
                placeholder="Email Address"
                {...register("email_id", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className=" text-red-700 mt-1">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "maxLength" &&
                    "Max length is 100 char. "}
                </p>
              )}{" "}
              <textarea
                className="w-full md:w-[100%] text-white bg-black rounded-sm mt-10 border border-white font-semibold placeholder-opaque-black p-3"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                className="w-[50%] md:w-[100%] rounded-sm p-3 font-semibold text-gray-500 mt-5  hover:text-white border border-white transition duration-500"
                type="submit"
              >
                SEND
              </button>
            </form>
          )}
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={contactUsImage}
            alt="Contact Us"
            className="w-full max-h-72 md:max-h-full"
          />
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-8 right-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href="tel:+923369762916" target="_blank" rel="noopener noreferrer">
          <FaPhone className="text-3xl text-green-500 hover:text-green-600" />
        </a>
        <a
          href="https://www.linkedin.com/company/softinnovos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-600" />
        </a>
        <button onClick={handleWhatsAppLink}>
          <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600" />
        </button>
      </motion.div>
    </motion.section>
  );
}

export default Contacts;
