import React from 'react'
import TeamListing from './teamListing'

describe('<TeamListing />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TeamListing />)
  })
})