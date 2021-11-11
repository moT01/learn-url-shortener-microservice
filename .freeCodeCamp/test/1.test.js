const assert = require('assert');
const fetch = require('node-fetch');

describe('SUBTASKS 1.1', async () => {
  let url = 'http://localhost:8080/';

  const codeAllyPort = process.env.CODEALLY_PORT_8080;
  if (codeAllyPort) url = codeAllyPort.replace('silisky.com', 'codeally.io');

  it(':1 A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds', async () => {
    try {
      const response = await fetch(`${url}api/2016-12-25`);
      const data = await response.json();
  
      assert.strictEqual(data.unix, 1482624000000);
    } catch (error) {
      assert(false);
    }
  });
});
