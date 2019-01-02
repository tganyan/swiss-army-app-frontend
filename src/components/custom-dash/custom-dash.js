import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardForm from '../custom-dash-form/custom-dash-form';

class CustomDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleRemove = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.dashboard);
  };

  handleUpdateRequest = () => {
    this.setState({ editing: true });
  };

  handleUpdateDashHideForm = (dashboard) => {
    this.setState({ editing: false });
    this.props.onUpdate(dashboard);
  };

  render() {
    const {
      dashboard,
      key,
    } = this.props;

    const editingJSX = <DashboardForm dashboard={dashboard} onComplete={this.handleUpdateDashHideForm}/>;
    const renderJSX = this.state.editing ? editingJSX :
      <React.Fragment>
        <h3>{dashboard.title}</h3>
        <button onClick={this.handleRemove}>X</button>
      </React.Fragment>;
    return (
      <div key={key}>
        <div onDoubleClick={this.handleUpdateRequest}>
          { renderJSX }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboards: state.dashboards,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

CustomDashboard.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
};

export default connect(mapStateToProps)(CustomDashboard);
