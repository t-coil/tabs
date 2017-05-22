import { connect } from 'react-redux';
import Landing from './Landing';
import { toggleModal } from '../actions/index';

const mapStateToProps = state => {
    return {
        tabsLength: state.tabs.length
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);