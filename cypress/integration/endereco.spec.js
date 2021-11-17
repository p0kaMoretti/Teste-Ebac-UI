/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereçps - Faturamento e Entrega', () => {
       beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
     })
        });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
         EnderecoPage.editarEnderecoFaturamento('Tanha', 'Mae', 'CATAL', 'Brasil', 'Rua das Flores', '47', 'Sorocaba', 'São Paulo', '18044320', '(15)99690-3344', 'emailddamae@emmail.com')
         cy.get('.woocommerce-message').should('contain' , 'Endereço alterado')
    });
});