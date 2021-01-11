# Next.js / StoryBook Boilerplate

## Overview

This is a boilerplate for Next.js websites, that are to be built using a [component driven development](https://www.componentdriven.org/) approach, with StoryBook. 

The boilerpate includes the following tooling:

- [Next.js](https://nextjs.org/) vanilla install
- [StoryBook](https://storybook.js.org/), with example pure presentation components
- Styling support for [Sass](https://sass-lang.com/) and [CSS modules](https://github.com/css-modules/css-modules)
- Linting, using [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/)
- Formatting using [Prettier](https://prettier.io/)
- Testing, using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting started

This will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To get this project up and running on your local system you'll need both [npm](https://www.npmjs.com) and [node.js](https://nodejs.org/en/) installed on your development system (currently LTS version 14.15.4).

### Installing

To install all dependencies required for the project, clone or download the source `cd` into the project root and from your terminal run:

```bash
npm install
```

## Development

### Next.js

The boilerplate uses [Create Next App](https://nextjs.org/docs/api-reference/create-next-app), this boilerplate comes pre-installed with a basic blog and directory structure to get you started. 

The following npm script is exposed to facilitate development, which will build the Next.js site in development mode,  with file watching and live reload enabled:

```bash
npm run dev
```

Alternatively, you can test the production build locally by running the following npm scripts.

First build the production site by running:

```bash
npm run build
```

Finnaly, start the production server by running:

```bash
npm run start
```

You can learn more about the difference between next build modes by reviewing the [Next.js CLI docs](https://nextjs.org/docs/api-reference/cli).

### Storybook

StoryBook is installed and configured to allow a [component driven development](https://www.componentdriven.org/) approach when building your Next.js website. The configuration includes support for vanilla Sass and CSS modules for styling. 

To start developing your components in StoryBook, an npm script has been exposed. This script will start StoryBook in development mode, with file watching and live reload enabled. Run the follwing npm script to start StoryBook in development mode:

```bash
npm run storybook
```

### Testing

For unit and intergration testing, [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) have been installed and configured to work out of the box. 

Jest configuration can be found in `package.json` under the `jest` key. See the [official Jest documentation](https://jestjs.io/docs/en/configuration) to learn the available configuration options.

To run your tests in watch mode, run the following npm script:

```bash
npm run test
```

To view a coverage report, run the following npm script:

```bash
npm run test:coverage
```

### Linting and formatting

The boilerplate comes installed with [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/) for linting and error checking. [Prettier](https://prettier.io/) is used for code formatting.

It is advised to run linting and formatting through your IDE and not via the CLI interface. If you are a VS Code user, you can learn how to enable these via the links below:

- [ESLint VS Code setup](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint VS Code setup](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier VS Code setup](https://prettier.io/docs/en/editors.html)

If you are unable to run the linters and formatting via your IDE, you can fallback to using the CLI (which should also be using for CD pipelines) using the following npm scripts. It's advised to always commit your changes before running fixes as they will write changes to your sourceode.

To lint your JavaScript run:

```bash
npm run lint-js
```

To auto fix your JavaScript run:

```bash
npm run lint-js:fix
```

To lint your SCSS run:

```bash
npm run lint-scss
```

To auto fix your SCSS run:

```bash
npm run lint-scss:fix
```

To check the formatting of your sourcecode run:

```bash
npm run format
```

To fix the formatting of your sourcecode run:

```bash
npm run format:fix
```

## Deployment

Both the core Next.js website and StoryBook component documentation can be build for production deployment using npm scripts.

### Storybook

To build StoryBook for production, run:

```bash
npm run build-storybook
```

You can learn more about StoryBook deployment on the [offical docs](https://storybook.js.org/docs/react/workflows/publish-storybook)

### Next

To build Next for production, run:

```bash
npm run build
```

You can learn more about Next.js deployment on the [offical docs](https://nextjs.org/docs/deployment)