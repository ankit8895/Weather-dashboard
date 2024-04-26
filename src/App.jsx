import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './Layout/PageLayout';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
