/// <reference types="cypress" />

import { Interception } from 'cypress/types/net-stubbing';

import menus from '../../fixtures/menus.json';

const coffeeJson = menus[2];

describe('__user__/home', () => {
  it('should return all menu items', () => {
    cy.intercept('GET', /\/v1\/menus$/, { fixture: 'menus.json' }).as('getMenus');

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.contains('Order your next delicious meal with us.');
      cy.get('ul[data-testid="menus"] li').as('menuItems');
      cy.get('@menuItems').should('have.length', 5);

      /**
       * First menu item => assertion
       */
      cy.get('@menuItems')
        .first()
        .invoke('text')
        .should(
          'match',
          /^SaladFresh salad with lettuce, tomatoes, cucumbers, and olives\.\$12\.99Order$/
        );
    });
  });

  it('should search and return a menu item', () => {
    cy.intercept({ method: 'GET', pathname: '/v1/menus' }, { fixture: 'menus.json' }).as(
      'getMenus'
    );

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.intercept(
        { method: 'GET', pathname: '/v1/menus', query: { search: '*' } },
        { statusCode: 200, body: [coffeeJson] }
      ).as('searchMenus');
      cy.input({ name: 'search' }).type('Coffee');
      cy.get('ul[data-testid="menus"] li').as('menuItems');
      cy.get('@menuItems').should('have.length', 1);
      cy.get('@menuItems')
        .first()
        .invoke('text')
        .should('match', /^CoffeeFreshly brewed coffee\.\$14\.75Order$/);
    });

    cy.wait('@searchMenus').then(({ request }: Interception) => {
      expect(request.query.search).to.contain('C');
    });
  });

  it('should show empty message when user searches a menu that is not present in server', () => {
    cy.intercept({ method: 'GET', pathname: '/v1/menus' }, { fixture: 'menus.json' }).as(
      'getMenus'
    );

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.intercept('GET', /\/v1\/menus/, { statusCode: 200, body: { data: [] } }).as('searchMenus');
      cy.input({ name: 'search' }).type('foo bar bazz');
      cy.get('img[alt="No data"]').should('exist');

      cy.wait('@searchMenus').then(({ request }: Interception) => {
        expect(request.query.search).to.contain('f');
      });
    });
  });

  it('should show empty message when server has no data', () => {
    cy.intercept('GET', /\/v1\/menus/, { statusCode: 200, body: { data: [] } }).as('getMenus');

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.get('img[alt="No data"]').should('exist');
    });
  });

  it('should sort menu items by "lowest price"', () => {
    cy.intercept('GET', /\/v1\/menus/, { fixture: 'menus.json' }).as('getMenus');

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.intercept('GET', /\/v1\/menus/, {
        statusCode: 200,
        body: menus.sort((a, b) => a.price - b.price),
      }).as('sortedMenus');
      cy.get('select[name="sort"]').select('price_asc');
      cy.get('ul[data-testid="menus"] li').as('menuItems');
      cy.get('@menuItems').should('have.length', 5);

      /**
       * The item with the lowest price should be the first item => assertion
       */
      cy.get('@menuItems')
        .first()
        .invoke('text')
        .should('match', /Chocolate Lava Cake\$6.50Order/);

      cy.wait('@sortedMenus').then(({ request }: Interception) => {
        expect(request.query.sort).to.contain('price_asc');
      });
    });
  });

  it('should sort menu items by "highest price"', () => {
    cy.intercept('GET', /\/v1\/menus/, { fixture: 'menus.json' }).as('getMenus');

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.intercept('GET', /\/v1\/menus/, {
        statusCode: 200,
        body: menus.sort((a, b) => b.price - a.price),
      }).as('sortedMenus');
      cy.get('select[name="sort"]').select('price_desc');
      cy.get('ul[data-testid="menus"] li').as('menuItems');
      cy.get('@menuItems').should('have.length', 5);

      /**
       * The item with the highest price should be the first item => assertion
       */
      cy.get('@menuItems')
        .first()
        .invoke('text')
        .should(
          'match',
          /Grilled SalmonSalmon fillet grilled to perfection, served with lemon.\$19.99Order/
        );

      cy.wait('@sortedMenus').then(({ request }: Interception) => {
        expect(request.query.sort).to.contain('price_desc');
      });
    });
  });

  it('should show error message when error is returned', () => {
    cy.intercept('GET', /\/v1\/menus/, {
      statusCode: 500,
      body: { errors: ['Internal server error'] },
    }).as('getMenus');

    cy.user();

    cy.wait('@getMenus').then((_: Interception) => {
      cy.contains('Internal server error');
    });
  });
});
