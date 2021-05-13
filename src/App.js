import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderWithRouter from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rewards from "./pages/Rewards/Rewards";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderWithRouter />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rewards" component={Rewards} />
          <Route path="*" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
