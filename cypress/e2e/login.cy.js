import LoginPage from '../support/pageObjects/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login com sucesso', () => {
    // use custom command for full-flow
    cy.login('teste@email.com', 'senha123456');
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });

  it('E-mail em branco', () => {
    LoginPage.fillPassword('senha123456');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'E-mail inválido');
  });

  it('Senha em branco', () => {
    LoginPage.fillEmail('teste@email.com');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'Senha inválida');
  });

  it('E-mail e senha em branco', () => {
    LoginPage.submit();
    cy.get('.invalid_input').should('be.visible');
  });

  it('Preencher apenas email', () => {
    LoginPage.fillEmail('teste@email.com');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'Senha inválida');
  });

  it('Preencher apenas senha', () => {
    LoginPage.fillPassword('senha123456');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'E-mail inválido');
  });

  it('Senha com menos de 6 dígitos', () => {
    LoginPage.fillEmail('teste@email.com');
    LoginPage.fillPassword('123');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'Senha inválida');
  });

  it('Clicar em "Ainda não tem conta?"', () => {
    LoginPage.clickRegisterLink();
    cy.url().should('include', 'register');
  });

  it('Email em minúscula', () => {
    cy.login('usuario@teste.com', 'senha123456');
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });

  it('Email em maiúscula', () => {
    cy.login('USUARIO@TESTE.COM', 'senha123456');
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });

  it('Senha com mais de 6 dígitos', () => {
    cy.login('teste@email.com', 'senhacommaisdedigitos123');
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });

  it('E-mail sem arroba', () => {
    LoginPage.fillEmail('testeemail.com');
    LoginPage.fillPassword('senha123456');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'E-mail inválido');
  });

  it('fazer login com email inválido (formato incorreto) e mostrar erro', () => {
    LoginPage.fillEmail('email-invalido');
    LoginPage.fillPassword('senha123456');
    LoginPage.submit();
    cy.get('.invalid_input').should('contain', 'E-mail inválido');
  });

  it('Preenchimento incorreto e tentar novamente', () => {
    LoginPage.fillEmail('teste');
    LoginPage.fillPassword('123');
    LoginPage.fillEmail('teste@email.com');
    LoginPage.fillPassword('senha123456');
    LoginPage.submit();
    cy.get('#swal2-title').should('contain', 'Login realizado');
  });
});
