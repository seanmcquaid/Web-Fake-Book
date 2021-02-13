import { MemoryRouter } from 'react-router-dom';

type MockRouterProps = {
  initialRoute: string;
};

const MockRouter: React.FC<MockRouterProps> = ({ initialRoute, children }) => (
  <MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
);

export default MockRouter;
