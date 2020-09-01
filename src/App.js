import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Container from '@material-ui/core/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <Header />
      <Container className = "color" maxWidth= "md">
      <Switch>
        <Route exact path='/'>
          <About/>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio></Portfolio>
        </Route>
        <Route exact path='/contact'>
          Hello
        </Route>
        <Route path='*'>
          Hello 
        </Route>
      </Switch>
      </Container>
      <Footer></Footer>
    </Router>

  );
}

export default App;
