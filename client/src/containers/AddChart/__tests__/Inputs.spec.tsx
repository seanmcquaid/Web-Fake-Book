import { render, screen } from '@testing-library/react';
import AddChartContext from '../../../context/AddChartContext';
import AddChart from '..';
import userEvent from '@testing-library/user-event';

describe('<Inputs/>', () => {
  const renderWithContext = () => {
    render(
      <AddChartContext>
        <AddChart />
      </AddChartContext>
    );
  };
  it('onChange displays the entered value', async () => {
    renderWithContext();

    userEvent.type(screen.getByPlaceholderText('Tune name here'), 'New Tune');
    expect(screen.getByPlaceholderText('Tune name here')).toHaveValue(
      'New Tune'
    );
  });
});
