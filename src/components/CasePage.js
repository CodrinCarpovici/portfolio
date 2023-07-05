import React from "react";
import Case from "./Case";
import data from "./caseData";

const CasePage = ({caseData}) => {
  return (
    <section id="case-page">
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
