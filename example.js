const {KEY} = process.env;

const {getVideos, getPlaylistInfo} = require("./index.js")(KEY);

getPlaylistInfo("PLc1l1_YXYDH4BoWto9Mds2aaL_bn1lAG_").then(info => console.log("Playlist: " + info.snippet.title));
getVideos("PLc1l1_YXYDH4BoWto9Mds2aaL_bn1lAG_").then( async playlist => {
	const videos = playlist.items;
	console.log(`Loaded ${videos.length} videos`);
	await videos.fetchMore();
	console.log(`Now Loaded ${videos.length} videos`);
	//await videos.fetchAll();
})
