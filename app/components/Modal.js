import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ tabs, selectedTab, isModalOpen }) => {
    const listView = tabs.map(tab =>
        <li>
            {tab.id}
            <button>Delete Me!</button>
        </li>
    );

    const modalView = (
        <div className="modal">
            Here is your list yo
            <ul>
                {listView}
            </ul>
            <button onClick={addTab}>Add Tab</button>
            <div>
                <textarea></textarea>
            </div>
        </div>
    );

    if (isModalOpen) {
        return modalView;
    } else {
        return null;
    }

};

Modal.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    selectedTab: PropTypes.string.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    addTab: PropTypes.func.isRequired
};

export default Modal;