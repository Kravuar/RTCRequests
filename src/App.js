import './App.css';
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Input from "./pages/Input";
import History from "./pages/History";
import Main from "./pages/Main";

function App() {
  return (
      <>
        <BrowserRouter>
            <header>
                <nav className="navbar bg-secondary bg-opacity-25">
                    <Link to="/" className="border border-2 border-dark rounded mx-2">
                        <img className="px-2 py-2" src="/img.png" style={{width: 238, height: 62}} alt=""/>
                    </Link>
                </nav>
            </header>
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
