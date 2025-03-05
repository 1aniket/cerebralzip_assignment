// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { UserProvider } from "./context/context";
import { Toaster } from "react-hot-toast";

// Router component to use the routes configuration
const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
