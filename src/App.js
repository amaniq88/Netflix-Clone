import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components /Home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default App;