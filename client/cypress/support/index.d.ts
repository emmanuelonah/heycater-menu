import { InputArg, TextareaArg } from './commands';

declare namespace Cypress {
  interface Chainable {
    admin(path?: string): Chainable<void>;
    user(path?: string): Chainable<void>;
    input(arg: InputArg): Chainable<JQuery<HTMLInputElement>>;
    textarea(arg: TextareaArg): Chainable<JQuery<HTMLTextAreaElement>>;
  }
}
