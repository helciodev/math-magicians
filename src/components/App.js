import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

function App() {
  return (
    <>

      {/*
  I will add a nav element with respective links
  I will wrap everything inside a main element */}
      <Navbar />
      <main className="calculator-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote" component={Quote} />
        </Switch>

      </main>
    </>
  );
}

export default App;
