import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Components/Pages/Login/Index";
import Home from "./Components/Home/Index";
import PrivateRoute from './Config/PrivateRoute';

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<>404 - Não Encontrado</>} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
