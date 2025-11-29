class RegisterPage {
  visit() {
    cy.visit('https://automationpratice.com.br/register');
  }

  getName() {
    return cy.get('#user');
  }

  getEmail() {
    return cy.get('#email');
  }

  getPassword() {
    return cy.get('#password');
  }

  getRegisterButton() {
    return cy.get('#btnRegister');
  }

  fillName(name) {
    this.getName().clear().type(name);
  }

  fillEmail(email) {
    this.getEmail().clear().type(email);
  }

  fillPassword(password) {
    this.getPassword().clear().type(password);
  }

  submit() {
    this.getRegisterButton().click();
  }
}

export default new RegisterPage();
