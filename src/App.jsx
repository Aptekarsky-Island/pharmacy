// src/App.jsx
import { GlobalProvider } from './context/GlobalContext';

function AppWithProviders({ children }) {
  return (
    <GlobalProvider>
     {children}
    </GlobalProvider>
  );
}

export default AppWithProviders;