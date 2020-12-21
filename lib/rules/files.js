/**
 * @fileoverview no string in files
 * @author Near
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
function testNode(context, node, value) {
  const level = context.options[0];
  if (level === "never") {
    return;
  }
  if (typeof value !== "string") {
    return;
  }
  const parents = context.getAncestors();
  if (parents.some((n) => n.type === "ImportDeclaration")) {
    return;
  }
  const callExpression = parents.find((n) => n.type === "CallExpression");
  if (callExpression && callExpression.callee.name === "require") {
    return;
  }
  const anymatch = require("anymatch");
  const path = require("path");
  const fileTypes = context.options[1];
  const fileName = context.getFilename();
  const fileNameRelative = path.relative(path.resolve("./"), fileName);
  const isInOption = anymatch(fileTypes, fileNameRelative);
  if (!isInOption) {
    return;
  }

  if (value.trim()) {
    context.report({
      node,
      message: "The string must be replaced by a variable or a constant",
    });
  }
}
module.exports = {
  meta: {
    docs: {
      description: "no string in files",
      category: "Fill me in",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        enum: ["always", "never"],
      },
      {
        type: "array",
        items: {
          type: "string",
        },
      },
    ],
  },

  create: function (context) {
    return {
      JSXText(node) {
        testNode(context, node, node.value);
      },
      Literal(node) {
        testNode(context, node, node.value);
      },
      StringLiteral(node) {
        testNode(context, node, node.text);
      },
    };
  },
};
