
# Svelte Project

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

---

## Data Model Update

**Note:** Shop information (`shopUrl`) has been removed from all data and components. If you previously used shop links, update your code and UI accordingly.

---

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
