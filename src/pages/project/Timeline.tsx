import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import { ProjectItem } from "./data";

interface Props {
  projectItem: ProjectItem;
}

const Timeline = ({ projectItem }: Props) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.head}></div>
      <div id={projectItem.year} className="d-flex align-items-center">
        <span className={styles.title}>{projectItem.year}</span>
      </div>
      <div className="row">
        {projectItem.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Timeline;
