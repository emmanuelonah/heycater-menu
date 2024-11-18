/// <reference types="cypress" />

import { RequireAtLeastOne } from 'GlobalTypes';

export type InputArg = RequireAtLeastOne<{
  name: string;
  placeholder: string;
  label: string;
}>;

export type TextareaArg = RequireAtLeastOne<{
  name: string;
  placeholder: string;
}>;

Cypress.Commands.add('admin', (path: string = '') => {
  cy.visit(`/admin${path}`);
});

Cypress.Commands.add('user', (path: string = '/') => {
  cy.visit(path);
});

Cypress.Commands.add('input', ({ name, placeholder, label }: InputArg) => {
  if (name) {
    return cy.get(`input[name="${name}"]`);
  }

  if (placeholder) {
    return cy.get(`input[placeholder="${placeholder}"]`);
  }

  if (label) {
    return cy.get(`input[aria-label="${label}"]`);
  }
});

Cypress.Commands.add('textarea', ({ name, placeholder }: TextareaArg) => {
  if (name) {
    return cy.get(`textarea[name="${name}"]`);
  }

  if (placeholder) {
    return cy.get(`textarea[placeholder="${placeholder}"]`);
  }
});
