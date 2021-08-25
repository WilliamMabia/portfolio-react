import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={About} path="/" exact />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Projects} path="/projects" />
        <Route component={Resume} path="/resume" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
