# Starter project

Bare-bones scaffolding for the kind of React project that I like. Gets me to "writing project code" with the minimum amount of fuss.

After cloning, run `rm -rf .git` to clear the GIT history and start the new project on a clean slate.

## Commands

-   `yarn` to install everything.
-   `yarn start` to fire up a dev server on port [1337](http://localhost:1338/) (port configurable in `webpack.config.js`).
-   `yarn build` creates a production build.
-   `yarn build_dev` creates a build in development mode (but does not fire up the watchers and server that `yarn start` does).
-   `yarn test` to run the (currently basic) tests.

## Things that are setup already

-   SASS (with basic layout classes, breakpoints, type & colour custom-properties, etc).
-   Babel compiling for all the nice JS things.
-   React scaffold, with an example context provider/consumer (with tests!) and an example component.
