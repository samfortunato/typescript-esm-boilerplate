# TypeScript to ESM Boilerplate

TypeScript does not yet support compilation to ECMAScript modules.

Because of this, here's some boilerplate you can use to quickly get going with writing ECMAScript modules with TypeScript.

## Running

`npm run build`

`npm run start-server`

Both processes have to be running at once.

## Commands

### `npm run build`
Runs TypeScript compiler in watch mode, and outputs all of your files as `.mjs`.

### `npm run start-server`
Serves `.mjs` files locally with the correct headers and access control headers. This is required.

## Further Reading

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
