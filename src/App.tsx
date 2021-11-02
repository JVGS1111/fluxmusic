import { Header } from './Components/header';
import { LastNews } from './pages/LastNews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/news'>
          <LastNews />
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
