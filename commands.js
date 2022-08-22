Cypress.Commands.add('addTodoItem', (názov) => {
    cy.get('.new-todo').type(názov + '{enter}')

})

Cypress.Commands.add('shouldHvTxt', (poradie, text) => {
    cy.get('.todo-list li').eq(poradie).should('have.text', text)

})

Cypress.Commands.add('itemChbx', (poradie) => {
    cy.get('.todo-list input').eq(poradie).check()

})

Cypress.Commands.add('itemChbxT', (poradie) => {
    cy.get('.todo-list li').eq(poradie).should('have.class', 'completed')

})

