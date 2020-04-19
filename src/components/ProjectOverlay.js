import React from 'react';
import { useProjectsValue } from '../context';
import { Menu } from 'antd';

export const ProjectOverlay = ({ designClass, setProject, showProjectOverlay, setShowProjectOverlay }) => {
    const { projects } = useProjectsValue();

    return (
        projects && showProjectOverlay && (
            <div className={designClass} data-testid="project-overlay">
                <div className="project-arrow"></div>
                <ul
                    className={`${designClass}__list`}
                >
                    {projects.map(project => (
                        <li
                            key={project.projectId}
                            data-testid="project-overlay-action"
                            onClick={() => {
                                setProject(project.projectId);
                                setShowProjectOverlay(false);
                            }}
                        >
                            {project.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}