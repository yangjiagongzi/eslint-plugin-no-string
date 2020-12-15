# no string in files (files)

In some projects, strings will be managed in a unified way to make projects is more friendly with i18n. So that, you may not want strings to appear in some files in your project.

## Rule Details

This rule enforces that string cannot exist in files.

Examples of **incorrect** code for this rule:

```js
var a = "hello world";
```

Examples of **correct** code for this rule:

```js
import Strings from "../Strings";
var a = Strings.hello;
```

### Options

For example, test the react files, and report error

```
['error', "always", [".jsx", ".tsx"]],
```
