import React from "react";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/home";
import CaregiverPage from "./layouts/caregiver";
import NotFound from "./layouts/notFound";
import LoginPage from "./layouts/login";
import ProtectedRoutes from "./auth/protectedRoute";
import { AuthProvider } from "./auth/authContext";
import CaregiverProfilePage from "./layouts/caregiverProfile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="caregivers" element={<CaregiverPage />} />
            <Route path="caregivers">
              <Route path=":caregiverId" element={<CaregiverProfilePage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/book" element={<h1>Booking Page</h1>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
