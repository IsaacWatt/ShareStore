// You should avoid sharing this token,
//  and should store it in an env variable

const lib = require('lib')({token: 'wQpOVE3MHZ8i5nwmMXf23J5z5lTuWQm8XVYpLcX8-inn5tOFK0s2WYIbF7xzE5SM'});
const sms = lib.utils.sms['@1.0.9'];

/**
* A basic Hello World function
* @param {string} price  Who you're saying hello to
* @param {string} phone  Who you're saying hello to
* @param {string} creditcard  Who you're saying hello to
* @returns {string}
*/
module.exports = async (price = '0', phone = '16138032652', creditcard = '', pay='true', context) => {

/* process payment */

/* confirmation email */
if (pay == 'true') {
  let result = await sms({
    to: phone, // (required)
    body: `Thanks for using StoreShare! $${price} was charged to your account.` // (required)
  });
} else {
  let result = await sms({
    to: phone, // (required)
    body: `Thanks for using StoreShare! Your Space has been shared.` // (required)
  });
}


return hello;
};