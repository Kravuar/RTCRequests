import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Input from "./pages/Input";
import History from "./pages/History";
import Main from "./pages/Main";

function App() {
  return (
      <>
        <BrowserRouter>
            <nav className="navbar shadow">
              <div>RTC Requests</div>
            </nav>
            <Routes>
              <Route exact path="/" element={<Navigate replace to="/upload"/>}/>
              <Route exact path="/upload" element={<Input/>}/>
              <Route exact path="/main" element={<Main/>}/>
              <Route exact path="/history/:id" element={<History/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
