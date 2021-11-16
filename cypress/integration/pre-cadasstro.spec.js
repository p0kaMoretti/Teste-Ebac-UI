/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        });
          
    afterEach(() => {
        cy.screenshot()
    });
    

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
        let nameFaker = faker.name.firstName()
        let lastnameFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!pikachus2.')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(lastnameFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});