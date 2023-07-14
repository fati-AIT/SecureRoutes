import { useQuery } from 'react-query';
import { getRoles } from './api';

export const useRoles = () =>
  useQuery(['roles'], getRoles, {
    retry: 1,
    staleTime: Infinity,
    placeholderData: [],
  });
