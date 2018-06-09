import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ErrorModal from '../../../components/modal/error/';
import * as errorModal from '../../../modules/components/modal/error/actionCreators';

const mapStateToProps = state => ({
  messageHeader: state.errorModal.messageHeader,
  message: state.errorModal.message,
  next: state.errorModal.next
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // gotoTCSbyPlant: () => push('/tcsbyplant'),
      ...errorModal
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ErrorModal)
);
