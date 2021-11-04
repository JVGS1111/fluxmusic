import { Header } from './Components/header';
import { LastNews } from './pages/LastNews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { ArtistsPage } from './pages/Artists';
import { Releases } from './pages/Releases';
import { News } from './pages/News';

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



      </Switch>
    </Router >
  );
}

export default App;
