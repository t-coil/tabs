export const toggleModal = () => {
    return {
        type: 'TOGGLE_MODAL'
    };
};

export const addTab = id => {
    return {
        type: 'ADD_TAB',
        id
    };
};

export const setSelectedTab = id => {
    return {
        type: 'SET_SELECTED_TAB',
        id
    };
};

export const saveText = (id, text) => {
    return {
        type: 'SAVE_TEXT',
        id,
        text
    };
};

export const deleteTab = id => {
    return {
        type: 'DELETE_TAB',
        id
    };
};
