
# Notmebotz - Tools

<a href="https://www.npmjs.com/package/notmebotz-tools"><img alt="npm version" src="https://img.shields.io/npm/v/notmebotz-tools.svg?style=flat-square"></a>
<img alt="version" src="https://img.shields.io/github/package-json/v/herzonly/notmebotz-tools?label=github&style=flat-square">
<a href="https://www.npmjs.com/package/notmebotz-tools"><img src="https://img.shields.io/npm/dm/notmebotz-tools.svg?style=flat-square" alt="npm downloads"></a>
[![js dilvr](https://data.jsdelivr.com/v1/package/npm/notmebotz-tools/badge)](https://www.jsdelivr.com/package/npm/notmebotz-tools)

An package for fetch url and downloading an video or photo from media social like YouTube, Tiktok, Instagram, Threads, Twitter, Likee

# installation

```bash
$ npm i notmebotz-tools 
```

here an example to use
# TIKTOK
```js
const { tiktok } = require('notmebotz-tools')
let tiktok = await ttdl("your video url")
return tiktok
```

# INSTAGRAM
```js
const { instagram } = require('notmebotz-tools')
let ig = await igdl("your video url")
return ig
```

# FACEBOOK
```js
const { facebook } = require('notmebotz-tools')
let fb = await fbdl("your video url")
return fb
```

# THREADS

```js
const { threads } = require('notmebotz-tools')
let threads = await threadsdl("your video url")
return threads
```

# LIKEE
```js
const { likee } = require('notmebotz-tools')
let likee = await likeedl("your video url")
return likee
```

# TWITTER
```js
const { twitter } = require('notmebotz-tools')
let twit = await twitterdl("your video url")
return twit
```

# YOUTUBE 
```js
const { youtube } = require('notmebotz-tools')
let tiktok = await ytdl("your video url")
return ytdl
```

## there will be many more tools coming soon