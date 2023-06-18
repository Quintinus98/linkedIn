import WorkExperience from "../components/workExperience";
import Seperator from "../components/seperator";
import Post from "../components/post";
import { profile, girls_dancing } from "../assets";

function Home() {
  const description =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  const post = {
    id: "34567898765",
    profile_name: "Egbin Power PLC",
    title: "Happy Democracy Day",
    text_content:
      "We are proud to be part of this great nation. Happy Democracy Day from all of us at Egbin Power Plc, Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects",
    image: profile,
    video: girls_dancing,
  };

  return (
    <div className="app">
      <div className="container">
        This is all test, to be deleted when pages are designed. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Amet sint soluta qui repellendus vitae et quasi debitis
        nostrum odit quas, illo placeat cumque eaque expedita fuga quos nulla iure veniam. Lorem
        ipsum dolor sit amet consectetur
      </div>

      <Post
        id={post.id}
        profile_name={post.profile_name}
        title={post.title}
        text_content={post.text_content}
        image={post.image}
        video={post.video}
      />

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
  );
}

export default Home;
