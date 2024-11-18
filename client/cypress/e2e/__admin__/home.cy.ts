/// <reference types="cypress" />

import { Interception } from 'cypress/types/net-stubbing';

import menu from '../../fixtures/menu.json';

describe('__admin__/home', () => {
  it('should add all menu items', () => {
    cy.intercept('POST', /\/v1\/menus$/, { fixture: 'menu.json' }).as('createMenu');

    cy.admin();

    cy.input({ name: 'name' }).type('Spaghetti bolognese');
    cy.textarea({ name: 'description' }).type('Spaghetti with minced meat sauce');
    cy.input({ name: 'price' }).type('10');
    cy.input({ name: 'imageUrl' }).type('https://ibb.co/kqQPVdg');

    cy.get('select').select('EUR');
    cy.get('button[type="submit"]')
      .click()
      .then(() => {
        cy.contains('Menu created successfully');
        cy.wait('@createMenu').then(({ response, request }: Interception) => {
          expect(response?.statusCode).to.equal(200);

          cy.wrap(request.body).should('deep.include', {
            currency: 'EUR',
            description: 'Spaghetti with minced meat sauce',
            imageUrl: 'https://ibb.co/kqQPVdg',
            name: 'Spaghetti bolognese',
            price: '10',
          });
          cy.wrap(response?.body).should('deep.include', menu);
        });
      });
  });

  it('should add only required fields', () => {
    cy.intercept('POST', /\/v1\/menus$/, { fixture: 'menu.json' }).as('createMenu');

    cy.admin();

    cy.input({ name: 'name' }).type('Spaghetti bolognese');
    cy.input({ name: 'price' }).type('10');

    cy.get('button[type="submit"]')
      .click()
      .then(() => {
        cy.contains('Menu created successfully');
        cy.wait('@createMenu').then(({ response, request }: Interception) => {
          expect(response?.statusCode).to.equal(200);

          cy.wrap(request.body).should('deep.include', {
            name: 'Spaghetti bolognese',
            price: '10',
          });
          cy.wrap(response?.body).should('deep.include', menu);
        });
      });
  });

  it('should show error message if price is less than 1', () => {
    cy.intercept('POST', /\/v1\/menus$/, {
      statusCode: 500,
      body: { errors: ['Price must be greater than 0'] },
    }).as('createMenu');

    cy.admin();

    cy.input({ name: 'name' }).type('Spaghetti bolognese');
    cy.input({ name: 'price' }).type('0');

    cy.get('button[type="submit"]')
      .click()
      .then(() => {
        cy.contains('Price must be greater than 0');
      });
  });
});
