import { useEffect, useState } from "react";
import { experiences, portfolioData, skills } from "../../data";
const useWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [workDetails, setWorkDetails] = useState([{}]);

  useEffect(() => {
    setWorks(portfolioData);
    setFilterWork(portfolioData);
  }, []);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.label.includes(item)));
      }
    }, 500);
  };
  const handleOpenModal = (id) => {
    setIsOpen(true);
    const filterData = works.filter((i) => i.id === id);
    setWorkDetails(filterData);
  };
  return {
    handleOpenModal,
    handleWorkFilter,
    activeFilter,
    animateCard,
    filterWork,
    isOpen,
    workDetails,
    setIsOpen,
  };
};

export default useWork;
