import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsValue();

    const addProject = () =>
        projectName && firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'jlIFXIwyAL3tzHMtzRbw'
            })
            .then(() => {
                setProjects([...projects]);
                setProjectName('');
                setShow(false);
            });

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input">
                    <input
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                        className="add-project__name"
                        data-testid="project-name"
                        type="text"
                        placeholder="Name your project"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit"
                    >
                        Add project
                        </button>
                    <span
                        data-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                        </span>
                </div>
            )}
            <div onClick={() => setShow(!show)} className="add-project__container">
                <span className="">
                    <IconContext.Provider value={{ className: "add-project__plus" }}>
                        <FaPlus />
                    </IconContext.Provider>
                </span>
                <span
                    data-testid="add-project-action"
                    className="add-project__text"
                >
                    Add Project
                </span>
            </div>
        </div>
    )
}