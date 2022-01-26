import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Routes,
  Route,
} from "react-router";
import { UsersPage, UserPage } from 'pages'
import Box from '@mui/material/Box'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box display='flex' justifyContent='center' padding={4}>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/:userId" element={<UserPage />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
