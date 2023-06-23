import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
  console.log(isAuthenticated)
  const element = isAuthenticated ? <Home /> : <Login loginWithRedirect={loginWithRedirect} />
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={element} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
