import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Modal = ({ tabs, selectedTab, addTab, isModalOpen, saveText, setSelectedTab, deleteTab, toggleModal }) => {
    const getPreviewText = text => {
        const preview = text ? text.slice(0, 40) : '';
        if (preview.length >= 40) {
            return preview.concat('...');
        }
        return preview;
    };

    const listView = tabs.map(tab =>
        <li key={tab.id}>
            <div className="li-container" onClick={() => setSelectedTab(tab.id)}>
                <div className="tab-name">{tab.id}</div>
                <div className="preview-text">{getPreviewText(tab.text)}</div>
            </div>
            <button className="delete-button" onClick={() => deleteTab(tab.id, selectedTab)}>x</button>
        </li>
    );

    const textBox = selectedTab !== 'no_tab' ? (
                <textarea value={_.get(_.find(tabs, { id: selectedTab }), 'text', '')} onChange={event => saveText(selectedTab, event.target.value)} />
    ) : null;

    const modalView = isModalOpen ? (
        <div className="modal">
            <div className="modal-content">
                <ul className="tab-list">
                    {listView}
                </ul>
                <button className="add-tab-button" onClick={() => addTab(tabs)}>Add Tab</button>
                <div className="text-box">
                    <button className="modal-closer" onClick={toggleModal}>x</button>
                    {textBox}
                </div>
            </div>
        </div>
    ) : null;

    return modalView;
};

Modal.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    selectedTab: PropTypes.string,
    isModalOpen: PropTypes.bool.isRequired,
    addTab: PropTypes.func.isRequired,
    saveText: PropTypes.func.isRequired,
    setSelectedTab: PropTypes.func.isRequired,
    deleteTab: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default Modal;
