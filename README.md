# TypeScript to ESM Boilerplate

TypeScript does not yet support compilation to `.mjs` files.

Because of this, here's some boilerplate you can use to quickly get going with writing ECMAScript modules as `.mjs` files with TypeScript.

## Running

- `npm run build`
- `npm run serve`

Both processes have to be running at once.

## Commands

### `npm run build`
- Runs TypeScript compiler in watch mode
- Upon successful compilation, converts all of your outputted `.js` files to `.mjs`
- Updates all file imports with no file extension to have the `.mjs` file extension

### `npm run serve`
- Serves `.mjs` files locally with the correct content-type and access control headers. This is required.

## Further Reading

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
