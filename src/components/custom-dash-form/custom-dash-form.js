import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  title: '',
};

class DashboardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.dashboard || emptyState;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    const actionText = this.props.dashboard ? 'Update' : 'Create';

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>{actionText} Dashboard</button>
      </form>
    )
  }
};

DashboardForm.propTypes = {
  dashboard: PropTypes.object,
  onComplete: PropTypes.func,
};

export default DashboardForm;
