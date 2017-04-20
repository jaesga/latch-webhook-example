var latch = require('latch-sdk');


APP_ID = 'dVvRCL6EfDYf4sqcEx7J';
SECRET = 'iZaP6fxaqZUgyb9MkkyYpTaf6T6y4NBXU3ZYg8gx';
ACCOUNT_ID = 'nxW8jXys8jZhQ84AaJFFjrdgpFtaWzLJC2UUiDdmHc6gekCZPZpE3J2TXYTmjaHL';

//latch.init({ appId: 'VWfEAzQXDHjJq4ajpXtd', secretKey: 'FJ4rrzer4dxaaavUgiUrRc2cuWi6u7f4dNAE3E2v' });
//latch.accountId = "EUcXNEAEQu2BtTf9g4YYGQNpLHN7qNKeDYFytiuXCqg4YTALhgkbt4dLRsjjPRpE";

latch.init({ appId: APP_ID, secretKey: SECRET, hostname: 'http://path2.devel.11paths.com' });
latch.accountId = ACCOUNT_ID;
latch.appId = APP_ID;

module.exports = latch;
