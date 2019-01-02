export const create = ({ title }) => {
  return {
    type: 'DASHBOARD_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    },
  };
};

export const update = (dashboard) => {
  return {
    type: 'DASHBOARD_UPDATE',
    payload: dashboard,
  };
};

export const remove = (dashboard) => {
  return {
    type: 'DASHBOARD_DESTROY',
    payload: dashboard,
  };
};
