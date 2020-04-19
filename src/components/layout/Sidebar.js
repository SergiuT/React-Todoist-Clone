import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const SideBar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === 'inbox' ? 'active' : undefined}
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <IconContext.Provider value={{ color: "#246fe0" }}>
                        <span><FaInbox /></span>
                    </IconContext.Provider>
                    <span>Inbox</span>
                </li>
                <li
                    data-testid="today"
                    className={active === 'today' ? 'active' : undefined}
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}
                >
                    <IconContext.Provider value={{ color: "#058527" }}>
                        <span><FaRegCalendar /></span>
                    </IconContext.Provider>
                    <span>Today</span>
                </li>
                <li
                    data-testid="next_7"
                    className={active === 'next_7' ? 'active' : undefined}
                    onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                >
                    <IconContext.Provider value={{ color: "#692fc2" }}>
                        <span><FaRegCalendarAlt /></span>
                    </IconContext.Provider>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle" onClick={() => {
                setShowProjects(!showProjects)
            }}>
                <span>
                    <FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} />
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                {showProjects && <Projects />}
            </ul>
            {showProjects && <AddProject />}
        </div>
    )
}