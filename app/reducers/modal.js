import baseState from './baseState';

const modal = (state = baseState.isModalOpen, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return !state.isModalOpen;
        default:
            return state;
    }
};

export default modal;