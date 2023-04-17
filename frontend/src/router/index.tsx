import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
