import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: 'always',
    },
  },
});

export default queryClient;
