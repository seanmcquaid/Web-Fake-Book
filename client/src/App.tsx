import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
  </BrowserRouter>
);

export default App;
