import React from "react";
import Case from "./Case";
import data from "./caseData";

const CasePage = () => {
  return (
    <section id="case-page">
      {data.map((data) => (
        <Case
          key={data.title}
          title={data.title}
          titleImg={data.titleImg}
          description={data.description}
          goals={data.goals}
          tech={data.tech}
          achievements={data.achievements}
          live={data.live}
          github={data.github}
        />
      ))}
    </section>
  );
};

export default CasePage;
