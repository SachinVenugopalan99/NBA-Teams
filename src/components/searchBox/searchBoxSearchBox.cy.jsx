import React from 'react'
import SearchBox from './searchBox'

describe('<SearchBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchBox />)
    cy.get('input') // get the first react-select input
    .click()
    .focus()
  })
})