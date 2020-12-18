# eslint-plugin-no-string

no string in files

**Under development, do not use in production environment**

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
Now only ".js", ".ts", ".jsx", ".tsx" are supported

```json
{
  "rules": {
    "no-string/files": ["error", "always", [".jsx", ".tsx"]]
  }
}
```

## Supported Rules
