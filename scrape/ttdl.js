const axios = require('axios');
const qs = require('querystring');

async function ttdl(url) {
  try {
    const data = qs.stringify({
      url: url,
      count: 12,
      cursor: 0,
      web: 1,
      hd: 1
    });

    const response = await axios.post('https://tikwm.com/api/', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    if (response.data.code === 0) {
      const videoData = response.data.data;

      return({
        aurhor: "Herza",
        status: 200,
        data: { 
        id: videoData.id,
        title: videoData.title,
        cover: `https://tikwm.com${videoData.cover}`,
        playUrl: `https://tikwm.com${videoData.play}`,
        hdPlayUrl: `https://tikwm.com${videoData.hdplay}`,
        musicUrl: `https://tikwm.com${videoData.music}`,
        musicTitle: videoData.music_info.title,
        musicAuthor: videoData.music_info.author,
        playCount: videoData.play_count,
        diggCount: videoData.digg_count,
        commentCount: videoData.comment_count,
        shareCount: videoData.share_count,
        downloadCount: videoData.download_count,
        avatar: `https://tikwm.com${videoData.author.avatar}`,
        nickname: videoData.author.nickname,
        isAd: videoData.is_ad,
        }
      });
    } else {
      throw new Error('Failed to fetch video data');
    }
  } catch (error) {
    console.error('Error in scraping video:', error);
    return null;
  }
}

module.exports = { ttdl };
