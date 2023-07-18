import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import { TiThMenu } from "react-icons/ti";
import logo from "../../assets/logo.png";
import blackLogo from "../../assets/blackLogo.png";

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const [menuIsToggled, setMenuIsToggled] = useState(false);
  const isAboveSmall = useMediaQuery("(min-width:768px)");
  const navBackground = isTopOfPage ? "" : "bg-white";
  const textAfterUpScroll = isTopOfPage ? " text-white" : "text-black";
  const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage
            ? `${textAfterUpScroll}`
            : "text-gray-500 "
        } hover:${textAfterUpScroll} transition duration-50`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          setMenuIsToggled(false);
        }}
      >
        {page}
      </AnchorLink>
    );
  };

  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-4`}>
      <div className={"flex items-center justify-between mx-auto w-5/6"}>
        <div className={"flex items-center"}>
          <img
            className={"w-auto max-w-full  h-20"}
            src={isTopOfPage ? logo : blackLogo}
            alt="logo"
          />
          <h6
            className={`font-playfair ${textAfterUpScroll} text-2xl font-bold`}
          >
            SOFTINNOVOS
          </h6>
        </div>

        {isAboveSmall ? (
          <div
            className={
              "flex justify-between font-opensans gap-16 text-sm font-semibold"
            }
          >
            <Link
              page={"Home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={"Services"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={"About"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={"Contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className={"rounded-full  bg-white p-2"}
            onClick={() => setMenuIsToggled(!menuIsToggled)}
          >
            <TiThMenu color="black" />
          </button>
        )}
        {/*Mobile Menu*/}
        {!isAboveSmall && menuIsToggled && (
          <div
            className={
              "fixed right-0 bottom-0 h-full bg-black w-[300px] border-l-2 border-white "
            }
          >
            <div className={"flex mr-10 justify-end p-12"}>
              <button onClick={() => setMenuIsToggled(!menuIsToggled)}>
                <TiThMenu color="white" />
              </button>
            </div>
            <div
              className={"flex flex-col gap-10 ml-[33%] text-2xl text-white"}
            >
              <Link
                page={"Home"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={"Services"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <Link
                page={"About"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <Link
                page={"Contact"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
