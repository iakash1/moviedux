import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/movieGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav></nav>
          <Routes>
            <Route path="/" element={<MovieGrid />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
