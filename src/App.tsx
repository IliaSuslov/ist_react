import { ThemeProvider } from './components/theme-provider';
import Layout from './components/Layout';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}
