import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { AboutContainer } from "./About_Styled";
import { Info } from "../../data";
const About = () => {
  return (
    <AboutContainer>
      <h2 className={"head-text"}> About</h2>
      <div className={"app__profile"}>
        <div className={"app__col"}>
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={"app__profile-item"}
          >
            <p className={"about_text"} style={{ marginTop: 10 }}>
              {Info.description}
            </p>
            <h3 className={"Hobbies_head"}>Hobbies</h3>
            <p className={"about_text"}>{Info.Hobbies}</p>
          </motion.div>
        </div>
        <ul className={"app__profile--info app__col"}>
          {Info.details.map((item, index) => (
            <motion.li
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className={""}
              key={item.id + index}
            >
              <div>
                <span className={"value"}>{item.value}</span>
                <span>: {item.label}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </AboutContainer>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
