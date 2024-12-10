
# Notmebotz - Tools

<a href="https://www.npmjs.com/package/notmebotz-tools"><img alt="npm version" src="https://img.shields.io/npm/v/notmebotz-tools.svg?style=flat-square"></a>
<img alt="version" src="https://img.shields.io/github/package-json/v/herzonly/notmebotz-tools?label=github&style=flat-square">

An package for fetch url and downloading an video or photo from media social like YouTube, Tiktok, Instagram, Threads, Twitter, Likee

here an example to use
# TIKTOK
```js
const { ttdl } = require('notmebotz-tools')
let tiktok = await ttdl("your video url")
return tiktok
```

# INSTAGRAM
```js
const { igdl } = require('notmebotz-tools')
let ig = await igdl("your video url")
return ig
```

# FACEBOOK
```js
const { fbdl } = require('notmebotz-tools')
let fb = await fbdl("your video url")
return fb
```

# THREADS

```js
const { threadsdl } = require('notmebotz-tools')
let threads = await threadsdl("your video url")
return threads
```

# LIKEE
```js
const { likeedl } = require('notmebotz-tools')
let likee = await likeedl("your video url")
return likee
```

# TWITTER
```js
const { twitterdl } = require('notmebotz-tools')
let twit = await twitterdl("your video url")
return twit
```

# YOUTUBE 
```js
const { ytdl } = require('notmebotz-tools')
let tiktok = await ytdl("your video url")
return ytdl
```