
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
