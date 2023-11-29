import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={query}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
