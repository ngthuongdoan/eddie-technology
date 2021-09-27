import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return useLocation().search;
};

export { useQuery };
