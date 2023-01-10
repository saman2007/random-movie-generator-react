import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import FiltersCard from "./components/Filters/FiltersCard";
import RandomMovieCard from "./components/RandomMovie/RandomMovieCard";
import AppWrapper from "./components/Wrapper/AppWrapper";

const queryClient = new QueryClient();

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <FiltersCard />
        <RandomMovieCard />
      </AppWrapper>
    </QueryClientProvider>
  );
}
export { api };
export default App;
