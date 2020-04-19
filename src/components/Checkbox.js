import React from 'react';
import { firebase } from '../firebase';
import { MdDone } from 'react-icons/md';
import { IconContext } from 'react-icons';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase.firestore().collection('tasks').doc(id).update({
            archived: true
        });
    };

    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTask()}
            onKeyDown={() => archiveTask()}
            role="button"
            tabIndex={0}
        >
            <span className="checkbox">
                <IconContext.Provider value={{ className: "alldone" }}>
                    <MdDone />
                </IconContext.Provider>
            </span>
        </div>
    )
}