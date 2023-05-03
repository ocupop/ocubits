# OcuBits
Reusable code developed by Ocupop.

# Installation and usage

The easiest way to use react-select is to install it from npm and build it into your app with Webpack.

```
yarn add @ocupop/ocubits
```

Then use it in your app:

```js
import React from 'react'
import { Form, Field, TextInput, Submit } from '@ocupop/ocubits'
import '@ocupop/ocubits/dist/style.css'
// --------
export default function App () {
  return (
    <>
      <h1>OcuBits Form</h1>
      <Form onSubmit={(values) => console.log(values)}>
        <Field
          name='fieldName'
          component={TextInput}
          placeholder={'Placeholder'}
          label={'Label'}
        />
        <Submit />
      </Form>
    </>
  )
}

```


## How to Contribute

Write directions for developing in Storybook:

### Link
This will allow you to develop OcuBits in parallel with another project that consumes OcuBit components.

Within this project run:
```
yarn link
```

This will link the local package until you unlink it, or restart your machine.

Within a project you're working on, add this to your package.json file
```
scripts: {
  ...
  "link:ocubits": "rm yarn.lock & rm -rf node_modules && yarn link @ocupop/ocubits && yarn",
  "unlink:ocubits": "yarn unlink @ocupop/ocubits && yarn add @ocupop/ocubits@latest"
}
```

To work within this repository in parallel run `npm run dev` and see the resulting changes

<!-- It might be useful to link directly to components, you can import them like this if you'd like to:

```js
import { SelectInput } from '../../../node_modules/@ocupop/ocubits/src'
``` -->

### Unlink

To unlink you can either restart your computer, or simply run
```
yarn unlink @ocupop/ocubits
```

## How to Publish
Create a tag.
1. Goto Actions
2. Click on "Generate Tag (Version)"
3. Click "Run Workflow"
4. Select the type of versioning. Rmember we're using [Semantic Versioning](https://semver.org/)
<img width="1456" alt="image" src="https://user-images.githubusercontent.com/245761/234324000-0e1d8fc0-20df-4c22-8028-5c998bb2f009.png">

Once the tag is generated, publish a release with the newly created tag
<img width="966" alt="image" src="https://user-images.githubusercontent.com/245761/234324499-3ac18730-931b-4487-935f-085cd9165940.png">

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
