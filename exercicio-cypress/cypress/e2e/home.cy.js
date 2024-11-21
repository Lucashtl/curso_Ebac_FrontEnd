/// <reference types="cypress" />

describe('Teste do formulario de contatos', () =>{
    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve preencher e incluir o contato', () =>{
        cy.get('[type="text"]').type('Lucas')
        cy.get('[type="email"]').type('Lucas@gmail.com')
        cy.get('[type="tel"]').type('11 123456789')
        cy.get('.adicionar').click()
    })

 

    it('Deve editar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('alan')
        cy.get('[type="email"]').clear().type('alan@hotmail.com')
        cy.get('[type="tel"]').clear().type('31 123456789')
        cy.get('.alterar').click()
    })

    it('Deletar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})