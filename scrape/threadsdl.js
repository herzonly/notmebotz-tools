const fetch = require('node-fetch');

async function threadsdl(url) {
  if (!url) {
    console.log(JSON.stringify({
      author: "Herza",
      status: 400,
      message: "Input Parameter URL"
    }, null, 2));
  }
  let za = await fetch(`https://api.tioo.eu.org/download/threads?url=${url}`);
  let data = await za.json();
  console.log(JSON.stringify({
    author: "Herza",
    status: 200,
    data: data.result
  }, null, 2));
}

module.exports = { threadsdl };
