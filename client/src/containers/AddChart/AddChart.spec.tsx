import Axios from 'axios-observable';
import { Observable } from 'rxjs';

describe('<AddChart/>', () => {
  it('Successful chart add redirects the user to the Charts page', () => {
    jest.spyOn(Axios, 'post').mockReturnValue(
      new Observable((subscriber) => {
        subscriber.next();
      })
    );
  });
});
