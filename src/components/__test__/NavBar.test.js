import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('Home page of App', () => {
  test('Build the snapshot of the Home component safely', () => {
    const nav = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });
});