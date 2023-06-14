import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

export { queryClient, QueryClientProvider };