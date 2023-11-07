import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./layouts/home";
import CaregiverPage from "./layouts/caregiver";
import NotFound from "./layouts/notFound";
import LoginPage from "./layouts/login";
import ProtectedRoute from "./auth/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <ProtectedRoute path="/home" element={<HomePage/>} />
          <ProtectedRoute path="/caregivers" element={<CaregiverPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
