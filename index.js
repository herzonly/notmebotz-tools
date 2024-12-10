const { ttdl } = require('./scrape/ttdl');
const { igdl } = require('./scrape/igdl');
const { twitterdl } = require('./scrape/twtdl')
const { fbdl } = require('./scrape/fbdl')
const { likeedl } = require('./scrape/likeedl')
const { threadsdl } = require('./scrape/threadsdl')
const { ytdl } = require('./scrape/ytdl')

async function tiktok(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await ttdl(url)
  return z
}

async function instagram(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await igdl(url)
  return z
}

async function twitter(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await twitterdl(url)
  return z
}

async function facebook(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await fbdl(url)
  return z
}

async function likee(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await likeedl(url)
  return z
}

async function threads(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await threadsdl(url)
  return z
}

async function youtube(url) {
  if(!url) return({
    author: "Herza",
    status: 400,
    msg: "input parameter URI"
  })
  let z = await ytdl(url)
  return z
}

module.exports = { tiktok, instagram, twitter, facebook, likee, threads, youtube };
