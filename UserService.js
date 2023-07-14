import Keycloak from 'keycloak-js';
import { KEYCLOAK_REALM, KEYCLOAK_URL, CLIENT_ID } from '../resources/current';

const _kc = new Keycloak({
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: CLIENT_ID,
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    })
    .then((authenticated) => {
      if (authenticated) {
        _kc.loadUserProfile();
        onAuthenticatedCallback();
      }
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

//const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const hasRole = (roles) =>
  Array.isArray(roles) && roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
