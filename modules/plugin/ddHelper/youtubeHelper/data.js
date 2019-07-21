import Axios from 'axios'

const key = 'AIzaSyB30NVmVSCSE-cf9K5C5H3AIc2yK0NBG9s'

let params = {
  eventType: 'live',
  part: 'snippet',
  type: 'video',
  key: key
}

function user (id) {
  params.channelId = id
  const hour = new Date().getHours()
  if (hour < 18) return []
  return new Promise(function (resolved, reject) {
    let api = `https://content.googleapis.com/youtube/v3/search`
    Axios.get(api, { params })
      .then(res => {
        console.log(res.data.items)
        // https://www.youtube.com/watch?v=res.data.items.id.videoId
        user = res.data.items
        resolved(user)
      })
      .catch(err => {
        return reject(err)
      })
  })
}

module.exports = user
