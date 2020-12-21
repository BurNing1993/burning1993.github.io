import React from "react";
import { Project } from "./data";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
      <div className="card border-light">
        <img src={project.imgUrl} className="card-img-top" alt={project.name} />
        <div className="card-body">
          <h5 className="card-title" title={project.name}>
            <span>{project.name}</span>
          </h5>
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge-primary mr-1">
              {tag}
            </span>
          ))}
          <p className="card-text">{project.desc}</p>
          <div className="d-flex justify-content-end">
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              源码
            </a>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              演示
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
