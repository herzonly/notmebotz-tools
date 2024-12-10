const axios = require('axios');
const qs = require('qs');

const fbdl = async (videoUrl) => {
  const apiUrl = 'https://v3.fdownloader.net/api/ajaxSearch?lang=en';
  const requestData = qs.stringify({
    k_exp: '1732847386',
    k_token: '23919191f2d6ca1d8062299f5ca2548c2aec728ee10e9400dba7046b9ee0a978',
    q: videoUrl,
    lang: 'en',
    web: 'fdownloader.net',
    v: 'v2',
    w: '',
  });

  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Accept: '*/*',
      },
    });

    if (response.data.status === 'ok' && response.data.data) {
      const html = response.data.data;
      const downloadLinks = {};

      const matches = [...html.matchAll(/<a href="([^"]+)"[^>]*title="Download ([^"]+)"/g)];
      for (const match of matches) {
        const url = match[1];
        const resolution = match[2];
        downloadLinks[resolution] = url;
      }

      console.log({
        author: "Herza",
        status: 200,
        data: downloadLinks,
      });
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

module.exports = { fbdl };
