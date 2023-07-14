import HttpService from '../../services/HttpService';
import { ROLE_API_PATHS } from './apiPaths';

const axios = HttpService.getAxiosClient();

export const getRoles = async () => {
  const result = await axios.get(ROLE_API_PATHS.ROLE_LIST_PATHS);
  return result.data.body;
};
