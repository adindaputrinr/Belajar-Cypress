// cypress/e2e/Belajar/Login.cy.js
/// <reference types="cypress" />

// describe("Login Test Suite", () => {
//     beforeEach(() => {
//         Navigation.visitLogin();
//         cy.clearAllSessionStorage;
//     });

//     it("Verifikasi Halaman Login", () => {
//         cy.visit('https://demo.snipeitapp.com/login');
//         cy.get('.alert').click();
//         cy.get('.form-group:nth-child(1) > label').click();
//         cy.get('#username').click();
//         cy.get('#username').click();
//         cy.get('.form-group:nth-child(2) > label').click();
//         cy.get('#password').click();
//         cy.get('#password').click();
//         cy.get('.form-control > input').click();
//         cy.get('.form-control > input').click();
//         cy.url().should('contains', 'https://demo.snipeitapp.com/');
//     });
//     });
describe("Login", () => {
   beforeEach(() => {
    cy.clearAllSessionStorage;
   })

it("Verifikasi Login", () => {
    cy.visit('https://demo.snipeitapp.com/login');
    cy.get('.container > .row').click();
    cy.get('#username').click();
    cy.get('#username').type('admin');
    cy.get('#password').click();
    cy.get('#password').type('password');
    cy.get('.form-control:nth-child(1)').click();
    cy.get('.form-control > input').click();
    cy.get('.btn').click();
    cy.url().should('contains', 'https://demo.snipeitapp.com/');
    cy.get('.alert');
})
it("Verifikasi valid user berhasil Login", () => {
    cy.visit("https://demo.snipeitapp.com/login");
    cy.get("#username").click();
    cy.get("#username").type("admin");
    cy.get("#password").click();
    cy.get("#password").type("password");
    cy.get(".form-control > input").not("[disabled]").check();
    cy.get(".col-md-12 > a")
      .should("be.visible")
      .contains("I forgot my password");
      cy.get('.btn').click();
  });
//   it("Verifikasi valid user berhasil Login", () => {
//     cy.visit("https://demo.snipeitapp.com/login");
//     cy.get("#username").click();
//     cy.get("#username").type("admin");
//     cy.get("#password").click();
//     cy.get("#password").type("password");
//     cy.get(".form-control > input").not("[disabled]").check();
//     cy.get(".form-control > input")
//       .not("[disabled]")
//       .uncheck()
//       .should("not.be.checked");
//     cy.get(".col-md-12 > a")
//       .should("be.visible")
//       .contains("I
});