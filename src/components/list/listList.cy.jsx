import React from 'react'
import List from './list'

describe('<List />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<List />)
  })
})