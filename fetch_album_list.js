'use strict'
const GP = require("./GPhotos.js")
const authOption = require("./google_auth.json")

var GPhotos = new GP({
  authOption: authOption,
  debug:true
})

const steps = async() => {
  try {
    var albums = await GPhotos.getAlbums()
    albums.forEach(album => console.log("Album name: " + album.title + " has ID:" + album.id));
    process.exit()
  } catch (err) {
    console.log(err)
    process.exit()
  }
}
steps()
