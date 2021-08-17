import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Error from './Error';

function App() {
  return (
    <>
      <Navbar />
      <main className="calculator-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
          <Route component={Error} />
        </Switch>

      </main>
    </>
  );
}

export default App;
