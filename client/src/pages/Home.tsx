import WorkExperience from "../components/workExperience";
import Seperator from "../components/seperator";
import Post from "../components/post";

function Home() {
  const description: string =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  return (
    <div>
      <div className="app">
        <div className="container">
          This is all test, to be deleted when pages are designed. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Amet sint soluta qui repellendus vitae et quasi debitis
          nostrum odit quas, illo placeat cumque eaque expedita fuga quos nulla iure veniam. Lorem
          ipsum dolor sit amet consectetur
        </div>

        <div className="container">
          <Post />
        </div>

        <div className="container">
          <WorkExperience
            title="Intern"
            employmentType="Internship"
            companyName="Outreachy"
            location="Remote"
            startDate={new Date(2022, 11, 5)}
            endDate={new Date(2023, 2, 3)}
            description={description}
            skills={["patternfly", "Redux"]}
          />
          <Seperator />
          <WorkExperience
            title="Intern"
            employmentType="Internship"
            companyName="Outreachy"
            location="Remote"
            startDate={new Date(2022, 11, 5)}
            endDate={new Date(2023, 2, 3)}
            description={description}
            skills={["patternfly", "Redux"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
