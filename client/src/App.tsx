import { useState } from "react";
import "./App.css";
import WorkExperience from "./components/workExperience";

function App() {
  const description: string =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  return (
    <>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo porro labore maiores
        nobis in inventore error unde quaerat aliquam adipisci assumenda laudantium earum culpa
        soluta, accusamus, cumque hic? A.
      </div>

      <WorkExperience
        title="Intern"
        employmentType="Internship"
        companyName="Outreachy"
        location="Remote"
        startDate={new Date("Dec 2022")}
        endDate={new Date("Mar 2023")}
        description={description}
        skills="patternfly, Redux"
      />
    </>
  );
}

export default App;
