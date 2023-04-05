# Ocuponents - Fields
Set of formik fields developed by Ocupop.

## How to Contribute
### Link
Within this project run:
```
npm link
```

This will link the local package until you unlink it, or restart your machine.

Within a project you're working on, run
```
npm link @ocupop/ocuponents-fields
```

This will have two effects:
- `npm install` will be run
- link the package to the project under development.

Do work within this repository and run `npm build` to see the resulting changes 

Each time you make changes run `yarn build` to rebuild the package

### Unlink

To unlink you can either restart your computer, or simply run
```
npm unlink @ocupop/ocuponents-fields
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