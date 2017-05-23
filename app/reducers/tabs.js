import _ from 'lodash';
import baseState from './baseState';

const updateItemInArray = (array, id, callback) => {
    const updatedArray = array.map(item => {
        if (item.id !== id) {
            return item;
        }

        return callback(item);
    });

    return updatedArray;
};

const updateObject = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
};

const setStorage = tabs => {
    localStorage.setItem('tabs', JSON.stringify(tabs));
};


const tabs = (state = baseState.tabs, action) => {
    let newTabs;
    switch (action.type) {
        case 'ADD_TAB':
            newTabs = state.concat([{ id: action.id, text: '' }]);
            setStorage(newTabs);
            return newTabs;
        case 'SAVE_TEXT':
            newTabs = updateItemInArray(state, action.id, tab => {
                return updateObject(tab, { id: action.id, text: action.text });
            });
            setStorage(newTabs);
            return newTabs;
        case 'DELETE_TAB':
            newTabs = state.reduce((acc, val) => {
                if (val.id !== action.id) {
                    acc.push(val);
                }

                return acc;
            }, []);
            setStorage(newTabs);
            return newTabs;
        default:
            return state;
    }
};

export default tabs;