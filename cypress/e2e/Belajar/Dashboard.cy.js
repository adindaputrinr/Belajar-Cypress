// cypress/e2e/Belajar/Dashboard.cy.js
/// <reference types="cypress" />

import login from "../../support/commands";

describe("Dashboard Test Suite", () => {
    beforeEach(() => {
    cy.login();
    cy.clearAllSessionStorage;
    })

    it("Verifikasi Logo Pada Dashboard", () => {
        cy.visit("https://demo.snipeitapp.com");
        cy.get(".content-header").should("be.visible").contains("Dashboard");
        cy.wait(5000);
    });

    // it("Verifikasi Logo Pada Dashboard", () => {
    //     cy.visit("https://demo.snipeitapp.com/login");
    //     cy.get("#username").click();
    //     cy.get("#username").type("admin");
    //     cy.get("#password").click();
    //     cy.get("#password").type("password");
    //     cy.get(".form-control > input").not("[disabled]").check();
    //     cy.get(".col-md-12 > a")
    //     .should("be.visible")
    //     .contains("I forgot my password");
    //     cy.get('.btn').click();
    //     cy.get('.content-header').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/');
    //     cy.get('.content-header').click();
    // });

    // it("Verifikasi Sidebar Dashboard", () => {

    // });

    // it("Verifikasi Search Bar Dashboard - Berhasil", () => {
    //     cy.visit("https://demo.snipeitapp.com/login");
    //     cy.get("#username").click();
    //     cy.get("#username").type("admin");
    //     cy.get("#password").click();
    //     cy.get("#password").type("password");
    //     cy.get(".form-control > input").not("[disabled]").check();
    //     cy.get(".col-md-12 > a")
    //       .should("be.visible")
    //       .contains("I forgot my password");
    //     cy.get('.btn').click();
    //     cy.get('.content-header').click();
    //     cy.get('#tagSearch').click();
    //     cy.get('#tagSearch').type('Laptops');
    //     cy.get('.col-xs-1 > .btn').click();
    //     cy.get('.navbar-form').submit();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/hardware');
    //     cy.get('.content-header').click();

    // });

    // it("Verifikasi Dropdown Create New Dashboard", () => {
    //     cy.visit("https://demo.snipeitapp.com/login");
    //     cy.get("#username").click();
    //     cy.get("#username").type("admin");
    //     cy.get("#password").click();
    //     cy.get("#password").type("password");
    //     cy.get(".form-control > input").not("[disabled]").check();
    //     cy.get(".col-md-12 > a")
    //     .should("be.visible")
    //     .contains("I forgot my password");
    //     cy.get('.btn').click();
    //     cy.get('.content-header').click();
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/hardware/create');
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/licenses/create');
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/accessories/create');
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/consumables/create');
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/components/create');
    //     cy.get('.open > .dropdown-toggle').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/users/create');

    // });

    // it("Verifikasi Icon Navigation Bar Dashboard", () => {
    //     cy.visit("https://demo.snipeitapp.com/login");
    //     cy.get("#username").click();
    //     cy.get("#username").type("admin");
    //     cy.get("#password").click();
    //     cy.get("#password").type("password");
    //     cy.get(".form-control > input").not("[disabled]").check();
    //     cy.get(".col-md-12 > a")
    //     .should("be.visible")
    //     .contains("I forgot my password");
    //     cy.get('.btn').click();
    //     cy.get('.content-header').click();
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/hardware');
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/licenses');
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/accessories');
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/consumables');
    //     cy.url().should('contains', 'https://demo.snipeitapp.com/components');

    // });
});