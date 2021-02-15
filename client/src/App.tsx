import { BrowserRouter, Route } from 'react-router-dom';
import AddChart from './containers/AddChart';
import ChartInfo from './containers/ChartInfo';
import Charts from './containers/Charts';
import EditChart from './containers/EditChart';
import Home from './containers/Home';
import Layout from './Layout';

const App: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/addChart" component={AddChart} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/chartInfo/:id" component={ChartInfo} />
      <Route exact path="/editChart/:id" component={EditChart} />
    </BrowserRouter>
  </Layout>
);

export default App;
