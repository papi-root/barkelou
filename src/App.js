import React, { Fragment } from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'; 
import Nav from './components/Nav'; 
import Index from './components/Index'; 
import Lancer from './components/Lancer';
import Decouverte from './components/Decouverte'; 
import ConnexionIndex from './components/connexion/Index'; 
import Inscription from './components/connexion/Inscription' 
import Details from './components/Details'; 
import './style.css'
import './explorer.css'; 
function App() {
  return ( 
    
    <Router>
      <Fragment>
          <Nav /> 
          <Route exact path="/barkelou/" component={Index} /> 
          <Switch>
              <Route exact path="/barkelou/lancer" component={Lancer} /> 
              <Route exact path="/barkelou/decouverte" component={Decouverte} /> 
              <Route exact path="/barkelou/auth" component={ConnexionIndex} /> 
              <Route exact path="/barkelou/inscription" component={Inscription} />
              <Route exact path="/barkelou/details" component={Details} />
 
          </Switch> 
          <footer>
              <h2>Barkelou</h2>
          </footer>
      </Fragment>
    </Router>
    
  );
}

export default App;
