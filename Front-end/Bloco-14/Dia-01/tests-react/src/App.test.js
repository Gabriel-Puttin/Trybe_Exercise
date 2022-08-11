import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('verifica se existe um input do tipo email na tela', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('verifica se existe dois botões na tela', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('verifica se existe um botão com o texto enviar na tela', () => {
  render(<App />);

  const button = screen.getByTestId('id-send');
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button');
  expect(button).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';
 
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);
  const textEmail = screen.getByTestId('id-email-user');

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});