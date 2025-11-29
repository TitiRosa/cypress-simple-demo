import RegisterPage from '../support/pageObjects/RegisterPage';

describe('Cadastro', () => {
  beforeEach(() => {
    RegisterPage.visit();
  });

  it('Cadastro com sucesso', () => {
    // use custom command for full-flow
    cy.register('Usuario Teste', 'usuario@teste.com', 'senha123456');
    cy.get('#swal2-title').should('contain', 'Cadastro realizado!');
  });

  it('Nome não preenchido', () => {
    RegisterPage.fillEmail('usuario@teste.com');
    RegisterPage.fillPassword('senha123456');
    RegisterPage.submit();
    cy.get('.errorLabel').should('contain', 'O campo nome deve ser prenchido');
  });

  it('E-mail não preenchido', () => {
    RegisterPage.fillName('Usuario Teste');
    RegisterPage.fillEmail('usuarioemail.com');
    RegisterPage.fillPassword('senha123456');
    RegisterPage.submit();
    cy.get('.errorLabel').should('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('E-mail inválido sem arroba', () => {
    RegisterPage.fillName('Usuario Teste');
    RegisterPage.fillEmail('usuarioemailcom');
    RegisterPage.fillPassword('senha123456');
    RegisterPage.submit();
    cy.get('.errorLabel').should('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Senha não preenchida', () => {
    RegisterPage.fillName('Usuario Teste');
    RegisterPage.fillEmail('usuario@teste.com');
    RegisterPage.submit();
    cy.get('.errorLabel').should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Senha menos de 6 dígitos', () => {
    RegisterPage.fillName('Usuario Teste');
    RegisterPage.fillEmail('usuario@teste.com');
    RegisterPage.fillPassword('123');
    RegisterPage.submit();
    cy.get('.errorLabel').should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });
});
