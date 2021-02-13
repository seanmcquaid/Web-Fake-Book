import Axios from 'axios-observable';
import { Observable } from 'rxjs';
import { render, screen, waitFor } from '@testing-library/react';
import AddChartContext from '../../context/AddChartContext';
import MockRouter from '../../testUtils/MockRouter';
import { Route } from 'react-router-dom';
import AddChart from '.';
import Charts from '../Charts';
import userEvent from '@testing-library/user-event';

describe('<AddChart/>', () => {
  const renderWithContext = () => {
    render(
      <MockRouter initialRoute="/addChart">
        <AddChartContext>
          <Route exact path="/addChart" component={AddChart} />
          <Route exact path="/charts" component={Charts} />
        </AddChartContext>
      </MockRouter>
    );
  };
  it('Successful chart add redirects the user to the Charts page', async () => {
    jest.spyOn(Axios, 'post').mockReturnValue(
      new Observable((subscriber) => {
        subscriber.next();
      })
    );

    renderWithContext();

    userEvent.click(screen.getByText('Add This Chart'));

    await waitFor(() => expect(screen.getByText('Charts')).toBeInTheDocument());
  });
});
