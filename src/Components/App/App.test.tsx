import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

it('renders all elements correctly', () => {
  const appComponent = shallow(<App />)
  expect(appComponent).toMatchSnapshot();
});
