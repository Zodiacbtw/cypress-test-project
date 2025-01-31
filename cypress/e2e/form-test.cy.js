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

    it('Email geçersiz olduğunda hata mesajı gösteriyor mu?', () => {
        cy.get('#email').type('test@invalid');
        cy.get('#password').type('Password123!');
        cy.get('#checkbox').check();
        cy.get('#button').should('be.disabled');

        cy.get('.error-message').should('exist');
        cy.get('.error-message').should('contain', 'Geçersiz email formatı');
    });

    it('Email adresi ve şifre yanlış olduğunda hata mesajlarını gösteriyor mu?', () => {
        cy.get('#email').type('test@invalid');
        cy.get('#password').type('pass');
        cy.get('#checkbox').check();
        cy.get('#button').should('be.disabled');

        cy.get('.error-message').should('have-length', 2);
        cy.get('.error-message').first().should('contain', 'Geçersiz email formatı');
        cy.get('.error-message').last().should('contain', 'Şifre geçersiz');
    });

    it('Email adresi ve şifre geçerli, checkbox işaretlenmemiş olduğunda buton disabled mı?', () => {
        cy.get('#email').type('test@example.com');
        cy.get('#password').type('Password123!');
        cy.get('#checkbox').uncheck();
        cy.get('#button').should('be.disabled');

        cy.get('.error-message').should('not.exist');
    });
})