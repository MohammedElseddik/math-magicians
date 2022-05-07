import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../Quote';

describe('Quote page of App', () => {
  test('Build the snapshot of the Quotes component safely', () => {
    const quote = render(
      <Router>
        <Quote />
      </Router>,
    );
    expect(quote).toMatchSnapshot();
  });
});