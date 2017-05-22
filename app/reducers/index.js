import { combineReducers } from 'redux';
import selectedTab from './selectedTab';
import tabs from './tabs';
import modal from './modal';

const state = combineReducers({
    tabs,
    selectedTab,
    modal
});

export default state;