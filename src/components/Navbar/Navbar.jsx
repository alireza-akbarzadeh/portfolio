import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Images } from "../../constant";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { NavbarContainer } from "./Navbar_Styled";
import { useTheme } from "../../definitions/styled-components";
import { MdNightlightRound } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
const Navbar = () => {
  const [mToggle, setMToggle] = useState(false);
  const { toggle, themeName } = useTheme();
  return (
    <NavbarContainer>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          {/*<img src={Images.logo} alt="logo"/>*/}
          <h3 className={"logo__Name-ALireza"}>
            Ali <span>reza</span>
          </h3>
        </div>
        <ul className={"app__navbar-links"}>
          {["home", "about", "work", "skills", "technology", "contact"].map(
            (nav) => (
              <li className={"app__flex p-text"} key={`link-${nav}`}>
                <div />
                <a href={`#${nav}`}>{nav}</a>
              </li>
            )
          )}
        </ul>
        <div className={"app__navbar-menu"}>
          <HiMenuAlt4 onClick={() => setMToggle(true)} />
          {mToggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setMToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "technology",
                  "contact",
                ].map((nav) => (
                  <li className={"app__flex p-text"} key={nav}>
                    <a onClick={() => setMToggle(false)} href={`#${nav}`}>
                      {nav}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        <div style={{ display: "flex", gap: 10, align: "center" }}>
          <div className='app__header-download'>
            <a data-tip data-for='registerTip' href={Images.CV} download>
              <MdDownload fontSize={20} color={"#313bac"} />
            </a>
            <ReactTooltip id='registerTip' place='bottom' effect='solid'>
              Download CV
            </ReactTooltip>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={toggle}
            data-tip
            data-for='modes'
          >
            {themeName === "light" ? (
              <MdNightlightRound color='#313bac' />
            ) : (
              <BsFillSunFill color='#313bac' />
            )}
            <ReactTooltip id='modes' place='bottom' effect='solid'>
              {themeName === "light" ? "Switch TO Light" : "Switch TO Dark"}
            </ReactTooltip>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
