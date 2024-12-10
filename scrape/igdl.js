const axios = require('axios');
const qs = require('qs');

async function igdl(url) {
  try {
    const requestData = qs.stringify({ url });
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
      Referer: 'https://instasave.website/download',
    };

    const response = await axios.post('https://api.instasave.website/media', requestData, { headers });

    if (response.status === 200) {
      const html = response.data;

      const urls = [];
      const regex = /https:\/\/[a-zA-Z0-9./?=_-]+/g;
      let match;

      while ((match = regex.exec(html)) !== null) {
        urls.push(match[0]);
      }

      console.log({
        creator: "Herza",
        status: 200,
        data: urls,
      });
    } else {
      return {
        creator: "Herza",
        status: response.status,
        data: [],
      };
    }
  } catch (error) {
    return {
      creator: "Herza",
      status: 500,
      data: [],
    };
  }
}

module.exports = {
  igdl,
}
