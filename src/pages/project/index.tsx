import React from "react";
import Timeline from "./Timeline";
import data from "./data";

const Project = () => <>{data.map((projectItem) => <Timeline key={projectItem.year} projectItem={projectItem} />)}</>

export default Project;
