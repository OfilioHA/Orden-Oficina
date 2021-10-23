import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home.jsx';
import { Agua } from './pages/agua.jsx';
import { Tienda } from './pages/tienda.jsx';
import { Fumigacion } from './pages/fumigacion.jsx';
import { Configuracion } from './pages/configuracion.jsx'
import { Login } from './pages/login.jsx';

  export function App() {
    return (
      <Router>
          <Switch>
            <Route path="/agua" component={Agua} />
            <Route path="/tienda" component={Tienda} />
            <Route path="/fumigacion" component={Fumigacion} />
            <Route path="/configuracion" component={Configuracion} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
      </Router>
    );
  }
