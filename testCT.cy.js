/// <reference types="cypress" />
const itemOne = 'buy some cheese'
const itemTwo = 'feed the cat'

beforeEach(() => {
    cy.visit('/')
    cy.viewport(1920, 1080)
})

it('test1', () => {
    cy.addTodoItem(itemOne)
    cy.addTodoItem(itemTwo)
    cy.shouldHvTxt(0, itemOne)
    cy.shouldHvTxt(1, itemTwo)
});

it('test2', () => {
    cy.addTodoItem(itemOne)
    cy.addTodoItem(itemTwo)
    //nepotrebujem celý test1 
    //cy.get('.todo-list li').eq(0).should('have.text', itemOne)
    //cy.get('.todo-list li').eq(1).should('have.text', itemTwo)
    cy.itemChbx(0)
    cy.itemChbxT(0)
});