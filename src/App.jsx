import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout';

import HomePage from './pages/HomePage';
import TempPage from './pages/TempPage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/temperature' element={<TempPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
