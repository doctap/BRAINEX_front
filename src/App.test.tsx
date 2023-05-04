import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store/store';
// import styles from './App.module.scss';

test('renders learn react link', async () => {
  render(
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
  const buttonShow = screen.getByTestId('show-btn');
  const theDiv = screen.queryByTestId('the-div');

  expect(theDiv).toBeNull();

  fireEvent.click(buttonShow);
  const header = await screen.findByText(/happy hacking!/i);
  expect(header).toBeInTheDocument();
  expect(header).toHaveStyle('color: red;');
  const buttonCount = screen.getByTestId('count-btn');
  expect(buttonCount).toBeInTheDocument();

  fireEvent.click(buttonCount);
  const textHeader = screen.getByText(/happy hacking!1/i);
  expect(textHeader).toBeInTheDocument();
});
