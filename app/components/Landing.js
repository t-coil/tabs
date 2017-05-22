import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({ tabsLength, toggleModal }) => {
    return (
        <div className="landing-container">
            <button onClick={toggleModal}>Open</button>
            {tabsLength}
        </div>
    );
};

Landing.propTypes = {
    tabsLength: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired
};

export default Landing;