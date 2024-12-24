import { BrowserRouter, Routes, Route } from "react-router";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetOTP from "./pages/PasswordResetOTP";
import SetPasswordPage from "./pages/SetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import Bulldog from "./components/Guard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/reset-password-otp" element={<PasswordResetOTP />} />
        <Route path="/set-new-password" element={<SetPasswordPage />} />

        <Route element={<Bulldog />}>

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard2" element={<DashboardPage />} />
          <Route path="/dashboard3" element={<DashboardPage />} />
          <Route path="/dashboard4" element={<DashboardPage />} />
          <Route path="/dashboard5" element={<DashboardPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
