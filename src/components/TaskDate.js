import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

export const TaskDate = ({ designClass, setTaskDate, showTaskDate, setShowTaskDate }) => showTaskDate && (
    <>
        <div className={designClass} data-testid="task-date-overlay">
            <div className="list-arrow"></div>
            <ul className={`${designClass}__list`}>
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-overlay"
                    >
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>
                            Today
                    </span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-tomorrow"
                    >
                        <span>
                            <FaSun />
                        </span>
                        <span>
                            Tomorrow
                    </span>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                        }}
                        data-testid="task-date-next-week"
                    >
                        <span>
                            <FaRegPaperPlane />
                        </span>
                        <span>
                            Next Week
                    </span>
                    </div>
                </li>
            </ul>
        </div>
    </>
)