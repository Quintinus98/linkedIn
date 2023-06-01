// import React from "react";
import "./style.css";

interface WorkExperienceProps {
  title: string;
  employmentType: string;
  companyName: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
}

interface skillProps {
  skills: string[];
}

const getColor = () => {
  const arr: string[] = ["crimson", "blue", "purple", "green", "gray"];
  return arr[Math.floor(Math.random() * arr.length)];
};


// Add the dot instead of * at a later time.
const UserSkills = ({skills}: skillProps) => {
  
  const mySkills = skills.map((skill, index) => {
    if (index < skills.length - 1) {
      return <span key={index}>{skill} * </span>
    } else {
      return <span key={index}>{skill} </span>
    }
  })

  return <span>{mySkills}</span>
}


const WorkExperience = ({
  title,
  employmentType,
  companyName,
  location,
  startDate,
  endDate,
  description,
  skills,
}: WorkExperienceProps) => {
  const color = getColor();

  if (endDate === undefined) {
    endDate = new Date();
  }
  // const period: Date = new Date(endDate.getTime() - startDate.getTime());

  return (
    <>
      <div className="flex_container container">
        <div className="logo" style={{ backgroundColor: color }}></div>
        <div className="exp_content">
          <h3>{title}</h3>
          <div className="companyName">
            <span>{companyName}</span> * <span>{employmentType}</span>
          </div>
          <div className="date">
            <span>{startDate.toLocaleString('en-US', {month: 'short'})} {startDate.getFullYear()} </span>
            -
            {/* Modify endDate to display present if not specified */}
            <span> {endDate.toLocaleString('en-US', {month: 'short'})} {endDate.getFullYear()}</span>
            {/* <span style={{marginRight:"10px"}}>{period.toLocaleDateString()}</span> */}
          </div>
          <div className="location">
            {location}
          </div>
          <div className="description">
            {description}
          </div>
          <div >
            <span className="skills">Skills: </span>
            <UserSkills skills={skills}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;