import React from 'react'
import Pagination from './pagination'

describe('<Pagination />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Pagination />)
    cy.get('#previousIcon')
    .click()
    cy.get('#number1')
    .click()
    cy.get('#number2')
    .click()
    cy.get('#nextIcon')
    .click()
  })
})