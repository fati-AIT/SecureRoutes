import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Unauthorized from './Unathorized';
import { useRoles } from '../../api/roles/caller';
import { AuthContext } from '../../context/AuthProvider';
import UserService from '../../services/UserService';
import { useContext } from 'react';

const RequireAuth = ({ allowedRoles }) => {
  const { data: rolesData, isLoading: rolesLoading } = useRoles();
  const roles = Array.isArray(rolesData) ? rolesData : [];
  const { auth } = useContext(AuthContext);

  console.log('Current User Roles:', roles);
  console.log('Allowed Roles:', allowedRoles);
  console.log('Auth Roles:', auth ? auth.roles : []);
  /*
  const hasRole = (roles) => {
    if (Array.isArray(roles)) {
      return roles.some((role) => UserService.hasRole(role));
    }
    return false;
  };
  */

  const hasRole = (role) => {
    //const result = roles.some((role) => UserService.hasRole(role));
    //console.log('hasRole Result:', JSON.stringify(result)); // Log the result of hasRole
    //return result;
    return UserService.hasRole(role);
  };

  if (rolesLoading) {
    return <div>Loading...</div>;
  }

  if (!allowedRoles.some((role) => hasRole(role))) {
    return <Unauthorized />;
  }

  return <Outlet />;
};

RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired,
};

export default RequireAuth;
