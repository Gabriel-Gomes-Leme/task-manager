import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router";
import { Login } from "../../pages/Login";
import { Dashboard } from "../../pages/Dashboard";
import { useEffect, type JSX } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLogged = typeof window !== "undefined" && localStorage.getItem("isLogged") === "true";

  return isLogged ? children : <Navigate to="/" replace />;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
