import React from 'react';
import MainPage from './pages/MainPage';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './shared/theme';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SampleStaticPage from './pages/SampleStaticPage';
import SampleApiPage from './pages/SampleApi';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sample-static" element={<SampleStaticPage />} />
            <Route path="/sample-api" element={<SampleApiPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
