import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home.jsx';
import { Agua } from './pages/agua.jsx';
import { Tienda } from './pages/tienda.jsx';
import { Fumigacion } from './pages/fumigacion.jsx';
import { Configuracion } from './pages/configuracion.jsx'

  export function App() {
    return (
      <Router>
        <div>     
          <Switch>
            <Route path="/agua">
              <Agua />
            </Route>
            <Route path="/tienda">
              <Tienda />
            </Route>
            <Route path="/fumigacion">
              <Fumigacion />
            </Route>
            <Route path="/configuracion">
              <Configuracion />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
