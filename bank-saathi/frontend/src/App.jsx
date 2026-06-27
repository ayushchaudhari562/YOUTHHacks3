import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import ProtectedRoute from "./routes/protectedRoute";

function App() {
  return (

    <div>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </div>
  )

}

export default App;