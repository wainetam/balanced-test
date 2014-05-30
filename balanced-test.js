var request = require('request'),
    Q = require('q');

var apiEndpoint = 'https://api.balancedpayments.com/';

var balanced = {
  // card: {},
  // bank: {}
  card: new Card(),
  bankAccount: new BankAccount()
};

balanced.configure = function(apiKey) {
  balanced.auth = { user: apiKey, pass: apiKey };
};

function Card() { // typeName is either 'cards or bankAccounts'
  this.debit = {
    type: 'cards',
    create: create
  };
}

function BankAccount() {
  this.debit = {
    type: 'bank_accounts',
    create: create
  };
}

// balanced.card = {
//   debit: {
//     create: create
//   }
// };

// balanced.bank = {
//   debit: {
//     create: create
//   }
// };

function create(transaction) { // transactionObject
  var deferred = Q.defer();
  var options = {
    uri: apiEndpoint + this.type + '/' + transaction.acctId + '/debits', // this.type is cards or bank_accounts
    auth: balanced.auth,
    form: {
      amount: transaction.amount || 0, // The amount of the debit in cents
      appears_on_statement_as: transaction.appears_on_statement_as || '',
      description: transaction.description || '',
      meta: transaction.meta || {}, // Single level mapping from string keys to string values
      order: transaction.order || '', // The order this debit is associated with
      source: transaction.source || '' // The funding instrument debited
    }
  };

  request.post(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
      deferred.resolve(body);

    } else {
      console.log(body);
      deferred.reject(body);
    }
  });
  return deferred.promise;
}

module.exports = balanced;
