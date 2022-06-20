import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import { skills, experiences } from "../../data";
import { SkillContainer } from "./Skills_styled";

const Skills = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setSkillsData(skills);
    setExperienceData(experiences);
  }, []);

  return (
    <SkillContainer>
      <h2 className={"head-text"}>Skills && Experience</h2>
      <div className='app__skills-container'>
        <motion.div className={"app--skills-list"}>
          {skillsData.map((item, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={"app__skills-item app__flex"}
              key={item + index}
            >
              <div className={"app__flex"} style={{ background: item.bg }}>
                <img src={item.icon} alt={item.name} />
              </div>
              <p className={"p-text"}>{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className={"app__skills-exp"}>
          {experienceData.map((item, index) => (
            <div key={item + index}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={"app__skills-exp-work"}
                data-tip
                data-for={item.name}
              >
                <p className={"p-text app__exp-years"}>{item.year}</p>
                <h4 className={"bold-text"}>{item.name}</h4>
                <p className={"p-text"}>{item.company}</p>
              </motion.div>
              <ReactTooltip
                id={item.name}
                effect='solid'
                arrowColor='#fff'
                className='skills-tooltip'
              >
                {item.desc}
              </ReactTooltip>
            </div>
          ))}
        </motion.div>
      </div>
    </SkillContainer>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
