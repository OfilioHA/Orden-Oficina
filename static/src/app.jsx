import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./libs/auth";
import { Login } from "./components/login";
import { Layout } from "./components/utils/base";
import { Home } from "./components/home";
import { Water } from "./components/water";

export const App = () => {
  const [isLogged] = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {!isLogged && (
          <>
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="*"
              element={<Navigate to="/login" />} 
            />
          </>
        )}
        {isLogged && (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/water" element={<Water />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};