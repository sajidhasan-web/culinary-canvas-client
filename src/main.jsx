import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import FirebaseProvider from "./Provider/FirebaseProvider.jsx";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
      <Toaster />
    </FirebaseProvider>
  </React.StrictMode>
);
