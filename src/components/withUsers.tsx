import React, { useContext } from 'react';
import { User, UserContext } from '../context/userContext';

const getDisplayName = (WrappedComponent: React.ComponentType<User>) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withUser = (WrappedComponent: React.ComponentType<User>) => {
  const ComponentWithUser = () => {
    const user = useContext(UserContext);

    return <WrappedComponent email={user.email} isAdmin={user.isAdmin} />;
  };

  ComponentWithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;

  return ComponentWithUser;
};

export default withUser;