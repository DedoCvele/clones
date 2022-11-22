import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./pages/Details";
import InsideOut from "./pages/InsideOut";
import Bao from "./pages/Bao";
import Incredibles2 from "./pages/Incredibles2";
import AuntieEDNA from "./pages/AuntieEDNA"
import ATail from "./pages/Atailoftwokitties";
import Raya from "./pages/Raya";
import Falcon from "./pages/theFalcon";
import Music from "./pages/MyMusic";
import Soul from "./pages/Soul";
import Assembled from "./pages/Assembled";
import Burrow from "./pages/Burrow";
import Legends from "./pages/Legends";
import Tangled from "./pages/Tangled";
import Moana from "./pages/Moana";
import Simpsons from "./pages/TheSimpsons";
import Mickey from "./pages/Mickey";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/insideOut" element={<InsideOut/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Bao" element={<Bao/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Incredibles2" element={<Incredibles2/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Atailoftwokitties" element={<ATail/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/AuntieEDNA" element={<AuntieEDNA/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Raya" element={<Raya/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Thefalconand" element={<Falcon/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Mymusicstory" element={<Music/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Soul" element={<Soul/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Assembled" element={<Assembled/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Burrow" element={<Burrow/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Legends" element={<Legends/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Tangled" element={<Tangled/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Moana" element={<Moana/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/TheSimpsons" element={<Simpsons/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Mickeymouse" element={<Mickey/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
