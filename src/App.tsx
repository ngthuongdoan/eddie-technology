import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
};

export default App;
