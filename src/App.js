import React, { Fragment } from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'; 
import Nav from './components/Nav'; 
import Index from './components/Index'; 
import Lancer from './components/Lancer';
import Decouverte from './components/Decouverte'; 
import ConnexionIndex from './components/connexion/Index'; 
import Inscription from './components/connexion/Inscription' 
import Details from './components/Details'; 

function App() {
  return ( 
    
    <Router>
      <Fragment>
          <Nav /> 
          <Route exact path="/" component={Index} /> 
          <Switch>
              <Route exact path="/lancer" component={Lancer} /> 
              <Route exact path="/decouverte" component={Decouverte} /> 
              <Route exact path="/auth" component={ConnexionIndex} /> 
              <Route exact path="/inscription" component={Inscription} />
              <Route exact path="/details" component={Details} />
              
          </Switch> 
          <footer>
        <h2>Barkelou</h2>
        
    </footer>
      </Fragment>
    </Router>
    
  );
}

export default App;
