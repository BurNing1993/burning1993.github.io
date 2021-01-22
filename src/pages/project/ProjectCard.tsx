import React from "react";
import { Project } from "./data";
import Tooltip from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap_white.css'

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
      <div className="card border-light">
        <img src={project.imgUrl} className="card-img-top img-fluid" style={{objectFit:'cover'}} alt={project.name} />
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
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                源码
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                演示
              </a>
            )}
            {project.qrcodeUrl && (
              <Tooltip
                placement="top"
                trigger={["hover"]}
                overlay={
                  <img src={project.qrcodeUrl} width='258' alt={project.name}/>
                }
              >
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  二维码
                </a>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
