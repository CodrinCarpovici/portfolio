import React, {useRef, useEffect} from "react";
import Case from "./data";


const CasePage = ({caseData}) => {
  const caseRef = useRef(null);

  useEffect(() => {
    if (caseRef.current) {
      const scrollOffset = caseRef.current.offsetTop - 81;
      window.scrollTo({ top: scrollOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="case-page" ref={caseRef}>
        <Case
          id={`${caseData.title}`}
          key={caseData.title}
          title={caseData.title}
          titleImg={caseData.titleImg}
          description={caseData.description}
          goals={caseData.goals}
          tech={caseData.tech}
          achievements={caseData.achievements}
          live={caseData.live}
          github={caseData.github}
        />
    </section>
  );
};

export default CasePage;
