import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Home from "./pages/Home.screen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Pokemon } from "./pages/Pokemon.screen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Container>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/pokemon/:pokemonName">
            <Pokemon/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
