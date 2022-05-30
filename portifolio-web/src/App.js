import SiteProvider from './context/SiteProvider';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
    <SiteProvider>
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/" component={ Home } />
      </Switch>
    </SiteProvider>
  );
}

export default App;
