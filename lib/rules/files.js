/**
 * @fileoverview no string in files
 * @author Near
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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
          enum: [".js", ".ts", ".jsx", ".tsx"],
        },
      },
    ],
  },

  create: function (context) {
    return {
      Literal(node) {
        const level = context.options[0];
        if (level === "never") {
          return;
        }
        if (typeof node.value !== "string") {
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
        const fileTypes = context.options[1];
        const fileName = context.getFilename();
        const isInOption = fileTypes.some((type) => fileName.endsWith(type));
        if (!isInOption) {
          return;
        }
        if (node.value.trim()) {
          context.report({
            node,
            message: "The string must be replaced by a variable or a constant",
          });
        }
      },
    };
  },
};
