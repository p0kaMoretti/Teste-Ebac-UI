/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

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
         EnderecoPage.editarEnderecoFaturamento('Tanha', 'Mae', 'CATAL', 'Brasil', 'Rua das Flores', '47', 'Sorocaba', 'São Paulo', '18044320', '(15)99690-3344', 'emailddamae@emmail.com')
         cy.get('.woocommerce-message').should('contain' , 'Endereço alterado')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefono,
            dadosEndereco[2].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado')
   });
});