/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereçps - Faturamento e Entrega', () => {
       beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
        })
        });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
 
        //cadastro de endereço
    });
});