import baseState from './baseState';

const modal = (state = baseState.isModalOpen, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            localStorage.setItem('isModalOpen', !state);
            return !state;
        default:
            return state;
    }
};

export default modal;