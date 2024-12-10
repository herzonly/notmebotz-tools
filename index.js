const { ttdl } = require('./scrape/ttdl');
const { igdl } = require('./scrape/igdl');
const { twitterdl } = require('./scrape/twtdl')
const { fbdl } = require('./scrape/fbdl')
const { likeedl } = require('./scrape/likeedl')
const { threadsdl } = require('./scrape/threadsdl')
const { ytdl } = require('./scrape/ytdl')


module.exports = { ttdl, igdl, twitterdl, fbdl, likeedl, threadsdl, ytdl };
