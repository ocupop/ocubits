# OcuBits
Reusable code developed by Ocupop.

## How to Contribute

Write directions for developing in Storybook:

### Link
This will allow you to develop along side another.

Within this project run:
```
npm link
```

This will link the local package until you unlink it, or restart your machine.

Within a project you're working on, run
```
npm link @ocupop/ocubits
```

This will have two effects:
- `npm install` will be run
- link the package to the project under development.

Do work within this repository and run `npm run build` to see the resulting changes 

Each time you make changes run `yarn run build` to rebuild the package

Note that after linking the project, you may need to restart it.

It might be useful to link directly to components, you can import them like this if you'd like to:

```js
import { SelectInput } from '../../../node_modules/@ocupop/ocubits/src'
```

Just remember to revert back.

### Unlink

To unlink you can either restart your computer, or simply run
```
npm unlink @ocupop/ocubits
```

Note that when doing this, you may need to re-add the package.

```
yarn add @ocupop/ocubits@latest
```

## How to Publish

--

Bumping versions we're using [Semantic Versioning](https://semver.org/)
```
npm version patch
# Bumps the patch number like 0.0.0 -> 0.0.1

npm version minor
# Bumps the patch number like 0.0.x -> 0.1.0

npm version major
# Bumps the patch number like 0.x.y -> 1.0.0
```

## Useful Links
- [formik](https://formik.org/)
- [Building an NPM package](https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/)
- [Linking/Unlinking Package](https://javascript.plainenglish.io/test-your-library-locally-with-npm-link-a5aa79d07270)

## Other Ocupop Packages
- [eslint-config](https://github.com/ocupop/eslint-config)