import LoadingPage from "./components/LoadingPage";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./Context/languageContext";
import { HomeProvider } from "./Context/homeContext";
import { CategoryProvider } from "./Context/CategoryContext";
import { LocationProvider } from "./Context/LocatorContext";
import { UserProvider } from "./Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from '@react-oauth/google'
const route = createBrowserRouter(Routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1033301862452-0ejguqbk7bd27g23vc9m5j8hrqbiq53e.apps.googleusercontent.com">
    <UserProvider>
      <LocationProvider>
        <LanguageProvider>
          <CategoryProvider>
            <HomeProvider>
              <ToastContainer />
              <RouterProvider router={route} fallbackElement={<LoadingPage />} />
            </HomeProvider>
          </CategoryProvider>
        </LanguageProvider>
      </LocationProvider>
    </UserProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
