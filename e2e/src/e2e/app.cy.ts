import { getGreeting } from '../support/50m.po';

describe('50-missions', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/50m.po.ts` file
    getGreeting().contains('Welcome 50-missions');
  });
});
