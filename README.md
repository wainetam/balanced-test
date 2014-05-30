# Balanced-Node Library (flavor of Stripe)

## Setup
  Add file in root directory of project folder and reference the filename. If not in root directory, adjust accordingly.
  ```
  var balanced = require('./balanced-test');

  balanced.configure(yourApiKey);
  ```
## Usage
  The goal was to make the Balanced-Node Library more intuitive to use, and Stripe's API was used as a model.

  To charge a credit card:
  ```
  balanced.card.debit.create({transactionObject})
  ```
  To charge a bank account:
  ```
  balanced.card.debit.create({transactionObject})
  ```

  This is in comparison to the [official Node.js library for Balanced Payments](https://github.com/balanced/balanced-node) below --

  To charge a credit card:
  ```
  balanced.get('/cards/:cardId').debit({transactionObject})
  ```

  To charge a bank account:
  ```
  balanced.get('/bank_accounts/:bankAccountId').debit({transactionObject})
  ```

## Examples
  ```
  // to charge credit card
  balanced.card.debit.create({
    acctId: 'xxxxxxxxxxxxxxx', // cardId from balanced.js
    amount: 3000, // in cents
    appears_on_statement_as: "Statement text",
    description: "Some descriptive text",
  });
  ```

  ```
  // to charge bank account
  balanced.bankAccount.debit.create({
    acctId: 'xxxxxxxxxxxxxxx', // bankAcctId from balanced.js
    amount: 5000, // in cents
    appears_on_statement_as: "Statement text",
    description: "Some descriptive text",
  });
  ```

## Credits

  - [Waine Tam](http://github.com/wainetam)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014
