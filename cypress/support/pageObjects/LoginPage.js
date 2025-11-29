class LoginPage {
  visit() {
    cy.visit('https://automationpratice.com.br/login');
  }

  getEmail() {
    return cy.get('#user');
  }

  getPassword() {
    return cy.get('#password');
  }

  getLoginButton() {
    return cy.get('#btnLogin');
  }

  fillEmail(email) {
    this.getEmail().clear().type(email);
  }

  fillPassword(password) {
    this.getPassword().clear().type(password);
  }

  submit() {
    this.getLoginButton().click();
  }

  clickRegisterLink() {
    cy.contains('a', 'Ainda não tem conta?').click();
  }
}

export default new LoginPage();
