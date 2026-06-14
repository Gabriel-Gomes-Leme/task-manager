import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Login } from "../../pages/Login";
import { Dashboard } from "../../pages/Dashboard";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
