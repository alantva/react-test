import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { requestResume } from '../reducers/resume';

import FormPage from './FormPage';

class App extends PureComponent {
  componentDidMount() {
    this.props.actions.requestResume();
  }

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme()}>
        <FormPage {...this.props.resume} />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ resume }) => ({ resume });

const mapDispatchToProps = dispatch => ({
  actions: {
    requestResume: () => dispatch(requestResume())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
