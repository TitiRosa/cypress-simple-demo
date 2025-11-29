import LoginPage from './pageObjects/LoginPage';
import RegisterPage from './pageObjects/RegisterPage';

// Command to perform login flow using the LoginPage page object
Cypress.Commands.add('login', (email, password) => {
  LoginPage.visit();
  if (email) LoginPage.fillEmail(email);
  if (password) LoginPage.fillPassword(password);
  LoginPage.submit();
});

// Command to perform registration flow using the RegisterPage page object
Cypress.Commands.add('register', (name, email, password) => {
  RegisterPage.visit();
  if (name) RegisterPage.fillName(name);
  if (email) RegisterPage.fillEmail(email);
  if (password) RegisterPage.fillPassword(password);
  RegisterPage.submit();
});
