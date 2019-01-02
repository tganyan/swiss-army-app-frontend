export default (state = [], { type, payload }) => {
  switch (type) {
    case 'DASHBOARD_CREATE':
      return [...state, payload];
    case 'DASHBOARD_UPDATE':
      return state.map((currentDashboard) => {
        return currentDashboard.id === payload.id ? payload : currentDashboard;
      });
    case 'DASHBOARD_DESTROY':
      return state.filter(currentDashboard => currentDashboard.id !== payload.id);
    default:
      return state;
  }
};
