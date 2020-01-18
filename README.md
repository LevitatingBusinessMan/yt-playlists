# YT-PLAYLISTS
A wrapper for Googles Youtube API focused on just playlists.
### Installing
```
npm i yt-playlists -s
```

### Usage
```JS
const KEY = "API KEY"
const {getVideos, getPlaylistInfo} = require("yt-playlists")(KEY)

//General playlist information (/youtube/v3/playlists)
getPlaylistInfo(ID).then(info => {
    // do stuff
})

//List of all videos (/youtube/v3/playlistItems)
getVideos(ID).then(async info => {
    //The array of videos
    const videos = info.items()
    
    /*
        At first the array only includes the first 50 videos
        But you can easily fetch 50 more
    */
    async videos.fetchMore()
    
    //Or fetch all of them
    async videos.fetchAll()
})

```
If you need a Google API key, you can do so here: https://developers.google.com/youtube/v3/getting-started

### Output
The output of yt-playlists is the same as what's documented on Googles documentation, see:
[getVideos](https://developers.google.com/youtube/v3/docs/playlistItems), [getPlaylistInfo](https://developers.google.com/youtube/v3/docs/playlists).
