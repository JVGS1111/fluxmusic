import { Header } from './Components/header';
import { LastNews } from './pages/LastNews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { ArtistsPage } from './pages/Artists';
import { Releases } from './pages/Releases';
import { News } from './pages/News';
import { NotFound } from './pages/NotFound';

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

        <Route exact path='/news/:id'>
          <News />
        </Route>

        <Route exact path='/artists'>
          <ArtistsPage />
        </Route>

        <Route exact path='/releases'>
          <Releases />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </Router >
  );
}

export default App;

//implementar amanha: barra de busca, localstorage para paginas