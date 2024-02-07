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

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi 5 Icon Menu di Navbar', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.nav > :nth-child(1) > a > .fas').click();
        cy.get('.nav > :nth-child(2) > a').click();
        cy.get('.nav > :nth-child(3) > a > .far').click();
        cy.get('.nav > :nth-child(4) > a > .fas').click();
        cy.get('.nav > :nth-child(5) > a > .far').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi Search Bar', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#tagSearch').click();
        cy.get('#tagSearch').should('be.visible');
        cy.get('.col-xs-1 > .btn > .fas').should('be.visible');
        cy.get('#tagSearch').clear('t');
        cy.get('#tagSearch').type('test');
        cy.get('.col-xs-1 > .btn > .fas').click();
        cy.get('.content-header').click();
        cy.get('.content-header > .pull-left').should('have.text', '\n  \n\n\nAll\nAssets\n\n             ');
        cy.get('.content-header > .pull-left').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi Dropdown Menu Create New', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(7) > .dropdown-toggle').should('be.visible');
        cy.get(':nth-child(7) > .dropdown-toggle').should('have.text', '\n                                        Create New\n                                        \n                                    ');
        cy.get(':nth-child(7) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(5) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(6) > a').should('be.visible');
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click();
        cy.get('.dropdown-toggle > .caret').click();
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click();
        cy.get(':nth-child(7) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click();
        cy.get(':nth-child(7) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').click();
        cy.get(':nth-child(7) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(5) > a').click();
        cy.get(':nth-child(7) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > :nth-child(6) > a').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Verifikasi Sidebar (assertion be visible)', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.sidebar-toggle').click();
        cy.get('.active > a > span').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(2) > [href="#"]').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(2) > [href="#"]').click();
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(4) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(5) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(6) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(7) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(8) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(9) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(10) > a').should('be.visible');
        cy.get('.treeview-menu > :nth-child(11) > a').should('be.visible');
        cy.get('.menu-open > [href="#"]').click();
        cy.get('.sidebar-menu > :nth-child(3) > a').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(4) > a > span').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(5) > a > span').should('be.visible');
        cy.get(':nth-child(6) > a > span').should('be.visible');
        cy.get(':nth-child(7) > a > span').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(8) > a > span').should('be.visible');
        cy.get('.sidebar-menu > :nth-child(9) > a > span').should('be.visible');
        cy.get('#settings > span').should('be.visible');
        cy.get('#settings').click();
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(4) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(5) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(6) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(7) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(8) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(9) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(10) > a').should('be.visible');
        cy.get('#settings > .fa').click();
        cy.get(':nth-child(11) > .dropdown-toggle > span').should('be.visible');
        cy.get('.dropdown-toggle > .fa').click();
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(4) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(5) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(6) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(7) > a').should('be.visible');
        cy.get('.menu-open > .treeview-menu > :nth-child(8) > a').should('be.visible');
        cy.get(':nth-child(12) > a > span').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });
});