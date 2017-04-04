import React from 'react';
import { shallow } from 'enzyme';
import NotFound from 'components/NotFound';
import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <NotFoundPage />
    );
    expect(renderedComponent.contains(
      <NotFound />
    )).toEqual(true);
  });
});
