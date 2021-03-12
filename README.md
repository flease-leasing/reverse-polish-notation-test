# Reverse Polish notation (RPN) calculator

The purpose here is to design a function that parse and evaluate a calcul describe using [reverse polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

Using RPN we can get rid of parenthesis. For instance:

- `(4 + 3) * 2` could be written `4 3 + 2 *` or `4 3 2 + *`
- `(4 - 3) * 2` could be written `4 3 - 2 *` or `4 3 2 - *`
- `(4 - 3) + 2` could be written `4 3 - 2 +` or `4 3 2 - +`

For this exercice, we will be focusing on parsing and evaluating the first kind of RPN notation,
(without all the operator at the end) like `4 3 - 2 +`.

# Stack

We will use typescript with strong type checking expressed in `tsconfig.json` and backed by `eslint`
for linting and formatting.

There is already 2 existing test case in `src/test/rpn-calculator.spec.ts`, **don't change them** ! But feel free,
to add new ones or even new test suites.

Tests are written using [jest](https://jestjs.io/).

You can run them by using 

> npm run test 

or to run them on every file change

> npm run test:watch

The function to be developed is in `src/main/rpn-calculator.ts`. 

## Tips 

> Don't hesitate to refacto your code to make it expressive and readable. 

> You can read [this article](https://medium.com/swlh/the-must-know-clean-code-principles-1371a14a2e75) for a few good advices about clean code

> You can try TDD methodology, [here is a good article](https://blog.ippon.fr/2020/02/12/apprendre-le-tdd/) that talk about it
