class Navigation {
    visitLogin() {
        cy.visit('https://demo.snipeitapp.com/login');
    }
    visitDashboard() {
        cy.visit('https://demo.snipeitapp.com');
    }
}

export default new Navigation();