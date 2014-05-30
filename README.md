# Balanced-Node Library (in the flavor of Stripe)

## Install
  Add file in root directory of project folder and reference the filename. If not in root directory, adjust accordingly.
  var balanced = require('./balanced-test');

## Usage
  balanced.configure(yourApiKey);
  
  // to charge credit card
  balanced.card.debit.create({
    acctId: 'xxxxxxxxxxxxxxx', // from balanced.js
    amount: 3000, // in cents
    appears_on_statement_as: "Statement text",
    description: "Some descriptive text for the debit",
  });

  // to charge bank account
  balanced.bankAccount.debit.create({
    acctId: 'xxxxxxxxxxxxxxx', from balanced.js
    amount: 5000, // in cents
    appears_on_statement_as: "Statement text",
    description: "Some descriptive text for the debit",
  });

## Credits

  - [Waine Tam](http://github.com/wainetam)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014
