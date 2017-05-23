import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from './Modal';
import { toggleModal, addTab, setSelectedTab, saveText, deleteTab } from '../actions/index';

const mapStateToProps = state => {
    return {
        tabs: state.tabs,
        selectedTab: state.selectedTab,
        isModalOpen: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
        addTab: tabs => {
            let newId = _.get(_.last(tabs), 'id', 0);
            newId++;
            dispatch(addTab(newId.toString()));
            dispatch(setSelectedTab(newId.toString()));
        },
        saveText: (id, text) => dispatch(saveText(id, text)),
        setSelectedTab: id => dispatch(setSelectedTab(id)),
        deleteTab: id => {
            dispatch(setSelectedTab(''));
            dispatch(deleteTab(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
