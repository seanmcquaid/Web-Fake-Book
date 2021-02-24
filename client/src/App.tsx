import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddChart from './containers/AddChart';
import ChartInfo from './containers/ChartInfo';
import Charts from './containers/Charts';
import EditChart from './containers/EditChart';
import Error from './containers/Error';
import Home from './containers/Home';
import Layout from './Layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addChart" component={AddChart} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/chartInfo/:id" component={ChartInfo} />
        <Route exact path="/editChart/:id" component={EditChart} />
        <Route component={Error} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
