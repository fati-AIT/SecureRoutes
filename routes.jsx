import { createBrowserRouter, Navigate } from 'react-router-dom';
import Applayout from '../layouts/appLayout/AppLayout';
import { USER_ROUTES } from './users/routes';
import { USER_BASE_PATH } from './users/paths';
import {
  DISCUSSION_ROUTES,
  NEWS_ROUTES,
  SOUSCRIPTION_ROUTES,
  WEB_ROUTES,
} from './support/routes';
import {
  BANKS_CODE_ROUTES,
  BLACKLISTDEVICE_ROUTES,
  CONTRACTS_ROUTES,
  BLOCK_USER_ROUTES,
  VERSIONNING_ROUTES,
  SEND_LOGIN_ROUTES,
  PISTE_AUDIT_ROUTES,
} from './administration/routes';
import {
  REPORTING_ROUTES,
  REPORTING_VIREMENT_ROUTES,
  REPORTING_REINITIALISATION_MDP_ROUTES,
} from './reporting/routes';

export const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Navigate to={USER_BASE_PATH + '/'} />,
      },
      USER_ROUTES,
      CONTRACTS_ROUTES,
      NEWS_ROUTES,
      BLACKLISTDEVICE_ROUTES,
      BLOCK_USER_ROUTES,
      REPORTING_ROUTES,
      WEB_ROUTES,
      BANKS_CODE_ROUTES,
      SEND_LOGIN_ROUTES,
      REPORTING_VIREMENT_ROUTES,
      REPORTING_REINITIALISATION_MDP_ROUTES,
      PISTE_AUDIT_ROUTES,
      VERSIONNING_ROUTES,
      DISCUSSION_ROUTES,
      SOUSCRIPTION_ROUTES,
    ],
  },
]);
