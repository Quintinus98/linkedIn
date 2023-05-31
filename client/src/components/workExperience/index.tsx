import React from "react";

interface WorkExperienceProps {
  title: string;
  employmentType: string;
  companyName: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string;
}

const getColor = () => {
  const arr: string[] = ["red", "yellow", "purple"];
  return arr[Math.floor(Math.random() * arr.length)];
};

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
  const period: Date = new Date(endDate.valueOf() - startDate.valueOf());
  // const period = new Date();

  return (
    <>
      <div className="flex_container">
        <div className="logo" style={{ backgroundColor: color }}></div>
        <div className="exp_content">
          {title}
          {employmentType}
          {companyName}
          {location}
          {period.toDateString()}
          {description}
          {skills}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
