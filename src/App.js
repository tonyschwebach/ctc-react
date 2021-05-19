import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderWithRouter from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rewards from "./pages/Rewards/Rewards";
import Footer from "./components/Footer/Footer";
import Education from "./pages/Education/Education";
import Join from "./pages/Join/Join";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderWithRouter />
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/education" component={Education} />
            <Route path="/join" component={Join} />
            <Route path="*" component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
