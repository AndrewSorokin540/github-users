import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Routes,
  Route,
} from "react-router";
import { UsersPage, UserPage } from 'pages'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/:userId" element={<UserPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
