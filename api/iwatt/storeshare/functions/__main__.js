// You should avoid sharing this token,
//  and should store it in an env variable

  const lib = require('lib')({token: 'wQpOVE3MHZ8i5nwmMXf23J5z5lTuWQm8XVYpLcX8-inn5tOFK0s2WYIbF7xzE5SM'});
  const sms = lib.utils.sms['@1.0.9'];


/**
* A basic Hello World function
* @param {string} price  Who you're saying hello to
* @returns {string}
*/
module.exports = async (price = '0', phone = '', creditcard = '', context) => {

  /* process payment */
  
  /* confirmation email */
  let result = await sms({
    to: phone, // (required)
    body: `Thanks for using StoreShare! $${price} was charged to your account.` // (required)
  });

  return `hello`;
};
