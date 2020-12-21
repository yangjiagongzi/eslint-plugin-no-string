# eslint-plugin-no-string

In some projects, strings will be managed in a unified way to make projects is more friendly with i18n. So that, you may not want strings to appear in some files in your project.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-string`:

```
$ npm install eslint-plugin-no-string --save-dev
```

## Usage

Add `no-string` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-string"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-string/files": [
      "error",
      "always",
      ["src/**", "src/index.ts", "**/*.jsx", "**/*.tsx"]
    ]
  }
}
```

## Supported Rules
