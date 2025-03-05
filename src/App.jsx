// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import routes from './routes/routes';


// Router component to use the routes configuration
const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;