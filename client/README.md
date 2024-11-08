<div align="center">
  <a href="https://github.com/heycater-menu">
    <img src="./src/design-system/assets/icn-logo.png" alt="logo" width="300" />
  </a>
</div>

<h1 align="center">HeyCater Menu Client</h1>

# About

HeyCater Menu Client contains the frontend code.

## Get started

### Scripts

This project uses yarn.

__Ensure you are using node version latest__
If you have nvm, run the below command to pick up the right node version:

```bash
nvm use
```

## Dependencies installation

```bash
yarn
```

## Development server

```bash
yarn run dev
```

 [Click to open with your browser to see the result](http://localhost:3000)

## Production build

```bash
yarn run build
```

## Run unit tests

```bash
yarn run test
```

## Run unit tests coverage

```bash
yarn run test:cv
```

## Visualize the design system

```bash
yarn run sb
```

## Lint errors

```bash
yarn run lint
```

## Format errors

```bash
yarn run format
```

## Architecture

### Code

For the code architecture, we use the MVP pattern

- M(Model): what interacts with the API
- V(view): what the end user sees in the browser
- P(Presenter): a middleware that communicates between the model and the view

### Processes

- Local CI:  for the local CI we use git hooks/husky

- Remote CI: For the remote CI we use git action. Note: the pipe may fail because it requires me to pay for private mode but when made public, it will pass

### Test

- React: testing library: We use React testing library for the UI test and
- Jest: we use jest for non-UI test
- Cypress: we use cypress for the e2e test

### Documentation

- Storybook: we use storybook for component and design system documentation

## Scripts

## Technologies used

1. [Create React App](https://create-react-app.dev/)

2. [React Router Dom](https://reactrouter.com/en/main/routers/create-browser-router)

3. [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

4. [Styled components](https://styled-components.com/)

5. [Axios](https://axios-http.com/docs/intro)

6. [Jest](https://jestjs.io/)

7. [React testing library](https://testing-library.com/docs/react-testing-library/intro/)

8. [Eslint](https://eslint.org/)

9. [Prettier](https://prettier.io/)

10. [Git Husky](https://typicode.github.io/husky/)

11. [Git Action](https://docs.github.com/en/actions)

12. [Storybook](https://storybook.js.org/)>

## Environments

- [Local](http://localhost:3000/)
- [Local](./this-is-usually-where-i-would-paste-the-production-fe-link)
- [Production](./this-is-usually-where-i-would-paste-the-production-fe-link)
