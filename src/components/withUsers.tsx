import React, { useContext } from 'react';
import { User, UserContext } from '../context/userContext';

const withUser = (WrappedComponent: React.ComponentType<User>) => {
  const ComponentWithUser = () => {
    const user = useContext(UserContext);

    return <WrappedComponent email={user.email} isAdmin={user.isAdmin} />;
  };

  return ComponentWithUser;
};

export default withUser;