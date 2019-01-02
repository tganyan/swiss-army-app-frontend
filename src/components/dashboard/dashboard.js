import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as dashboardActions from '../../actions/dashboard-actions';
import CustomDashForm from '../custom-dash-form/custom-dash-form';
import CustomDash from '../custom-dash/custom-dash';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CustomDashForm
          onComplete={this.props.dashCreate}
        />
        <div>{ this.props.dashboards.map(currentDash => <CustomDash
          key={currentDash.id}
          dashboard={currentDash}
          onRemove={this.props.dashRemove}
          onUpdate={this.props.dashUpdate}
        />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboards: state.dashboard,
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dashCreate: (dashboard) => {
      dispatch(dashboardActions.create(dashboard));
    },
    dashRemove: (dashboard) => {
      dispatch(dashboardActions.remove(dashboard));
    },
    dashUpdate: (dashboard) => {
      dispatch(dashboardActions.update(dashboard));
    },
  };
};

Dashboard.propTypes = {
  dashCreate: PropTypes.func,
  dashRemove: PropTypes.func,
  dashUpdate: PropTypes.func,
  dashboards: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
