import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

it('a click in a button should increment the value of clicks', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

  expect(screen.getByText('5')).toBeInTheDocument();
});

it('Teste com o valor padrão para o reducer', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 } } });

  const button = screen.getByRole('button');

  expect(screen.getByText('0')).toBeInTheDocument();

  userEvent.click(button);

  expect(screen.getByText('1')).toBeInTheDocument();
});

it('Teste com o valor pré definido para o reducer', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

  const button = screen.getByRole('button');

  expect(screen.getByText('10')).toBeInTheDocument();

  userEvent.click(button);

  expect(screen.getByText('11')).toBeInTheDocument();
});
});