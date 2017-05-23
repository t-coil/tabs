import baseState from './baseState';

const selectedTab = (state = baseState.selectedTab, action) => {
    switch (action.type) {
        case 'SET_SELECTED_TAB':
            localStorage.setItem('selectedTab', action.id);
            return action.id;
        default:
            return state;
    }
};

export default selectedTab;