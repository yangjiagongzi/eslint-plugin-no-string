/**
 * @fileoverview no string in files
 * @author Near
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/files"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("files", rule, {
  valid: [
    {
      code: "var a = ''",
      options: ["always", [".jsx", ".tsx"]],
      filename: "a.jsx",
    },
    {
      code: "var a = b",
      options: ["always", [".jsx", ".tsx"]],
      filename: "a.jsx",
    },
    {
      code: "var a = '123'",
      options: ["never", [".jsx", ".tsx"]],
      filename: "a.jsx",
    },
    {
      code: "var a = '123'",
      options: ["always", [".jsx", ".tsx"]],
      filename: "a.js",
    },
  ],

  invalid: [
    {
      code: "var a = '123'",
      options: ["always", [".jsx", ".tsx"]],
      filename: "a.tsx",
      errors: [
        {
          message: "The string must be replaced by a variable or a constant",
          type: "Literal",
        },
      ],
    },
  ],
});
