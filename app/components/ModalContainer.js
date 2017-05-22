import { connect } from 'react-redux';
import Modal from './Modal';

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
        addTab: text => dispatch(addTab(text))
    };
};

export default connect(mapStateToProps)(Modal);