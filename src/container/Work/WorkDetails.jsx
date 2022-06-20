import React, { memo } from "react";
import Modal from "../../components/Modal";
import { WorkDetails as Container } from "./Work_styled";
const WorkDetails = ({ isOpen, setIsOpen, data }) => {
  return (
    <Modal
      onClose={() => {
        setIsOpen(false);
      }}
      open={isOpen}
    >
      {data?.length === 0
        ? "No details Found"
        : data?.map((item, index) => (
            <Container key={index}>
              <div className='Work_Details-item'>
                <img src={item.ImgUrl} alt={item.title} />
              </div>
              <div className='Work_Details-item info'>
                <div className={"app_work-label"}>{item.label}</div>
                <h4 className={"bold-text"}>{item.title}</h4>
                <p className={"p-text"}>{item.description}</p>
                <div className={"app__work-tag"}>
                  {item.tags?.map((tag, index) => (
                    <div key={index}>{tag}</div>
                  ))}
                </div>
              </div>
            </Container>
          ))}
    </Modal>
  );
};

export const MemoizeWorkDetails = memo(WorkDetails);
