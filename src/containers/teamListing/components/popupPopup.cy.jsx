import React from 'react'
import Popup from './popup'

describe('<Popup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Popup />)
  })
})