// import { useState } from "react";
import "./App.css";
import WorkExperience from "./components/workExperience";
import Seperator from "./components/seperator";
import NavBar from "./components/navbar";

function App() {
  const description =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  return (
    <div>
      <NavBar />
      <div className="app">
        <div className="container">
          This is all test, to be deleted when pages are designed. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Amet sint soluta qui repellendus vitae et quasi debitis
          nostrum odit quas, illo placeat cumque eaque expedita fuga quos nulla iure veniam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam a distinctio
          voluptatibus, necessitatibus temporibus ullam esse tenetur earum pariatur repellendus
          consectetur, sint recusandae omnis officiis labore molestias quae perferendis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Maxime, architecto fugiat. Illum
          consequatur eaque amet facilis laborum officiis similique ea perferendis dolor repellendus
          dignissimos sunt, id sequi dolorum aperiam quisquam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa nobis voluptate officiis porro mollitia vero eum
          accusantium a quisquam natus, laudantium neque, hic delectus officia maiores aut
          voluptates eveniet animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          sint soluta qui repellendus vitae et quasi debitis nostrum odit quas, illo placeat cumque
          eaque expedita fuga quos nulla iure veniam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum ipsam a distinctio voluptatibus, necessitatibus temporibus
          ullam esse tenetur earum pariatur repellendus consectetur, sint recusandae omnis officiis
          labore molestias quae perferendis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime, architecto fugiat. Illum consequatur eaque amet facilis laborum officiis
          similique ea perferendis dolor repellendus dignissimos sunt, id sequi dolorum aperiam
          quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis voluptate
          officiis porro mollitia vero eum accusantium a quisquam natus, laudantium neque, hic
          delectus officia maiores aut voluptates eveniet animi! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Amet sint soluta qui repellendus vitae et quasi debitis
          nostrum odit quas, illo placeat cumque eaque expedita fuga quos nulla iure veniam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam a distinctio
          voluptatibus, necessitatibus temporibus ullam esse tenetur earum pariatur repellendus
          consectetur, sint recusandae omnis officiis labore molestias quae perferendis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Maxime, architecto fugiat. Illum
          consequatur eaque amet facilis laborum officiis similique ea perferendis dolor repellendus
          dignissimos sunt, id sequi dolorum aperiam quisquam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa nobis voluptate officiis porro mollitia vero eum
          accusantium a quisquam natus, laudantium neque, hic delectus officia maiores aut
          voluptates eveniet animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          sint soluta qui repellendus vitae et quasi debitis nostrum odit quas, illo placeat cumque
          eaque expedita fuga quos nulla iure veniam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum ipsam a distinctio voluptatibus, necessitatibus temporibus
          ullam esse tenetur earum pariatur repellendus consectetur, sint recusandae omnis officiis
          labore molestias quae perferendis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime, architecto fugiat. Illum consequatur eaque amet facilis laborum officiis
          similique ea perferendis dolor repellendus dignissimos sunt, id sequi dolorum aperiam
          quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis voluptate
          officiis porro mollitia vero eum accusantium a quisquam natus, laudantium neque, hic
          delectus officia maiores aut voluptates eveniet animi! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Amet sint soluta qui repellendus vitae et quasi debitis
          nostrum odit quas, illo placeat cumque eaque expedita fuga quos nulla iure veniam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam a distinctio
          voluptatibus, necessitatibus temporibus ullam esse tenetur earum pariatur repellendus
          consectetur, sint recusandae omnis officiis labore molestias quae perferendis!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Maxime, architecto fugiat. Illum
          consequatur eaque amet facilis laborum officiis similique ea perferendis dolor repellendus
          dignissimos sunt, id sequi dolorum aperiam quisquam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa nobis voluptate officiis porro mollitia vero eum
          accusantium a quisquam natus, laudantium neque, hic delectus officia maiores aut
          voluptates eveniet animi!
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

export default App;
