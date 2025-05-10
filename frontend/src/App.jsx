import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // anasayfaya yönlendir
  };

  return (
    <>
      {isLoggedIn && (
        <div className="d-flex justify-content-end p-3">
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/todos"
          element={
            isLoggedIn ? (
              <TodosPage />
            ) : (
              <div className="text-center mt-5">Lütfen giriş yapın.</div>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
