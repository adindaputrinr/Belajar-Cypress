// cypress/e2e/Belajar/Dashboard.cy.js
/// <reference types="cypress" />

import Navigation from "../../support/POM/Navigation";

describe('Login Test Suite', () => {
    beforeEach(() => {
        Navigation.visitLogin();
        cy.clearAllSessionStorage;
        });

    it('Verifikasi Login Valid User (Login - Positive Test Case)', () => {
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

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi Login User Tidak Valid (Login - Negative Test Case)', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('p').click();
        cy.get('#username').clear('a');
        cy.get('#username').type('admin');
        cy.get('#password').clear('a');
        cy.get('#password').type('admin');
        cy.get('.form-control > input').check();
        cy.get('.form-control > input').uncheck();
        cy.get('.btn').click();
        cy.get('strong').should('be.visible');
        cy.get('strong').should('have.text', 'Error: ');
        cy.get(':nth-child(2) > .alert').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi Login Username & Password Kosong (Login - Negative Test Case)', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .alert').should('be.visible');
        cy.get(':nth-child(2) > .alert').should('have.text', '\n        ×\n        \n        Error:\n         Please check the form below for errors\n    ');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .alert-msg').should('be.visible');
        cy.get(':nth-child(1) > .alert-msg').should('have.text', ' The username field is required.');
        cy.get(':nth-child(2) > .alert-msg').should('be.visible');
        cy.get(':nth-child(2) > .alert-msg').should('have.text', ' The password field is required.');
        /* ==== End Cypress Studio ==== */
    });
})