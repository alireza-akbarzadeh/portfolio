import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Teach } from "../../data";
import { TeachContainer } from "./Technology_Styled";

const Technology = () => {
  return (
    <TeachContainer>
      <h2 className={"head-text"}>
        The<span> Technologies</span> & <span> Library</span> I Used And I Am
        Familiar With
      </h2>
      <div className='app__technology--container'>
        {Teach.map((item, i) => (
          <div className={"app__technology--item"} key={item.id + i}>
            <div>
              <img src={item.img} alt='' />
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </TeachContainer>
  );
};

export default AppWrap(
  MotionWrap(Technology, "app__technology"),
  "technology",
  "app__primarybg"
);
