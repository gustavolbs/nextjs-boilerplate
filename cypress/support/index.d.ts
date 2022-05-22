/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.getByTestId('greeting')
       */
      getByTestId(selector: string): Chainable<Element>;
    }
  }
}
