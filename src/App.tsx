import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Landing } from './components/Landing';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <div className="App">
            <Landing />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;