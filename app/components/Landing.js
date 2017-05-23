import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({ tabsLength, toggleModal }) => {
    const tabNumber = tabsLength > 0 ? (
        <div className="tab-number">{tabsLength} Tabs</div>
    ) : null;

    return (
        <div className="landing-container">
            <button className="open-button" onClick={toggleModal}>Open</button>
            {tabNumber}
        </div>
    );
};

Landing.propTypes = {
    tabsLength: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default Landing;