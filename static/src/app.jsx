import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./libs/auth";
import { Login } from "./components/login";
import { Layout } from "./components/utils/base";
import { Home } from "./components/home";
import { Task } from "./components/tasks";
import { Birthdays } from "./components/birthdays";
import { Register } from "./components/register";

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
              path="/register" 
              element={<Register />} 
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
              <Route path="home" index element={<Home />} />
              <Route path="tasks" element={<Task />} />
              <Route path="birthdays" element={<Birthdays />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};