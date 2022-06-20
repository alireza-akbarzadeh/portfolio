import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { WorkContainer } from "./Work_styled";
import { MemoizeWorkDetails } from "./WorkDetails";
import useWork from "./useWork";
const Work = () => {
  const {
    handleOpenModal,
    handleWorkFilter,
    activeFilter,
    animateCard,
    filterWork,
    isOpen,
    setIsOpen,
    workDetails,
  } = useWork();
  return (
    <>
      <WorkContainer>
        <h2 className={"head-text"}>
          My Creative <span> Portfolio</span> Section
        </h2>
        <div className='app__work-filter'>
          {["All", "Reactjs", "React-Native", "Nextjs", "Gatsbyjs"].map(
            (item, index) => (
              <div
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
                key={index}
                onClick={() => handleWorkFilter(item)}
              >
                {item}
              </div>
            )
          )}
        </div>
        <motion.div
          className={"app__work-portfolio"}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filterWork.map((item, index) => (
            <div
              onClick={() => handleOpenModal(item.id)}
              key={item.title + index}
              className={"app__work-item app__flex"}
            >
              <div className={"app__work-img app__flex"}>
                <img src={item.ImgUrl} alt={item.title} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: "0.25",
                    ease: "easeInOut",
                    staggerChildren: "0.5",
                  }}
                  className={"app__work-hover app__flex"}
                >
                  <a
                    href={item.projectLink}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <motion.div
                      transition={{
                        duration: "0.25",
                      }}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      className={"app__flex"}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={item.projectCode}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <motion.div
                      transition={{
                        duration: "0.25",
                      }}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      className={"app__flex"}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className={"app__work-content app__flex"}>
                <h4 className={"bold-text"}>{item.title}</h4>
                <p className={"p-text"}>{item.description}</p>
                <div className={"app__work-tag app__flex"}>
                  <div className={"app_work-tag"}>{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </WorkContainer>
      <MemoizeWorkDetails
        data={workDetails}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
