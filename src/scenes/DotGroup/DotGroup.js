import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup({ selectedPage, setSelectedPage }) {
  const selectedStyle =
    "relative bg-white before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-white before:left-[-50%] before:top-[-50%]";
  return (
    <div className={"flex flex-col gap-6 fixed top-[60%] right-7"}>
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyle : " bg-gray-500"
        } w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        className={`${
          selectedPage === "services" ? selectedStyle : " bg-gray-500"
        } w-3 h-3 rounded-full`}
        href={`#services`}
        onClick={() => setSelectedPage("services")}
      />
      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyle : " bg-gray-500"
        } w-3 h-3 rounded-full`}
        href={`#about`}
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyle : " bg-gray-500"
        } w-3 h-3 rounded-full`}
        href={`#contact`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
}

export default DotGroup;
