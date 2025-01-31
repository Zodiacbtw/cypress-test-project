describe('Kullanıcı girişi testleri', () => {
    
    beforeEach(() => {
        cy.visit('/');
    });

    it('Form eksiksiz doldurulduğunda submit edilip success sayfasına gidiliyor mu?', () => {
        cy.get('#email').type('test@example.com');
        cy.get('#password').type('Password123!');
        cy.get('#checkbox').check();
        cy.get('#button').should('not.be.disabled');
        cy.get('#button').click();

        cy.url().should('include', '/success');
    });

    
})