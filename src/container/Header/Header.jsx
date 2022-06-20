import React from "react";
import { motion } from "framer-motion";
import { Images } from "../../constant";
import { HeaderContainer } from "./Header_styled";
import { AppWrap } from "../../wrapper";

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <HeaderContainer>
      <div id={"home"} className={"app__header app__flex"}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={"app__header-info"}
        >
          <div className={"app__header-badge"}>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{ marginRight: 20 }}>
                <p className={"p-text"}>Hello, I am </p>
                <h1 className={"head-text"}>Alireza</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className={"p-text"}>Frontend Developer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={"app__header-img"}
        >
          <img src={Images.profile} alt='profile' />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={Images.circle}
            alt={"profile__circle"}
            className={"overlay__circle"}
          ></motion.img>
        </motion.div>
        <motion.div
          variants={scaleVariant}
          whileInView={scaleVariant.whileInView}
          className={"app__header-circles"}
        >
          {[Images.Next, Images.react, Images.Gatsby].map((item, i) => (
            <div className={"circle-cmp app__flex"} key={`circle-${item}`}>
              <img src={item} alt='circle' />
            </div>
          ))}
        </motion.div>
      </div>
    </HeaderContainer>
  );
};

export default AppWrap(Header, "home", "app__primarybg");
