const assert = require('assert');
const fetch = require('node-fetch');

describe('SUBTASKS 1.1', async () => {
  let url = 'http://localhost:8080/';

  const codeAllyPort = process.env.CODEALLY_PORT_8080;
  if (codeAllyPort) url = codeAllyPort.replace('silisky.com', 'codeally.io');

  it(':1 You can POST a URL to "/api/shorturl" and get a JSON response with "original_url" and "short_url" properties. Here\'s an example: { original_url : "https://freeCodeCamp.org", short_url : 1}', async () => {
    try {
      const urlVariable = Date.now();
      const fullUrl = `${url}?v=${urlVariable}`
      const res = await fetch(url + 'api/shorturl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=${fullUrl}`
      });

      if (res.ok) {
        const { short_url, original_url } = await res.json();
        assert.isNotNull(short_url);
        assert.strictEqual(original_url, `${url}?v=${urlVariable}`);
      } else {
        assert(false);
      }
    } catch (error) {
      assert(false);
    }
  });
});
