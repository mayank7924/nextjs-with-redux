
# With Redux Wrapper Example

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app.
The concept of global state caters to both client side and server side stores with the help of a master reducer.
This is an example on how you can use redux that also works with our universal rendering approach. This is just a way you 
can do it but it's not the only one. Please find other methods under the official documentation of next-redux-wrapper.
Docs: https://github.com/kirill-konshin/next-redux-wrapper

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
git clone https://github.com/mayank7924/nextjs-with-redux
cd nextjs-with-redux
npm install
for running development server: npm run dev
for running prod like server: npm run build, npm run start
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## NOTE: There are three projects present in this repo in separate branches
    main: redux with Next.JS
      |-starter-project: starter Next.JS app
      |-redux-toolkit: redux-toolkit wuth Next.JS


