const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  printP: () => {
    for (const playlist in library.playlists) {
      console.log(library.playlists[playlist].id + ": " + library.playlists[playlist].name + " - " + library.playlists[playlist].tracks.length + " tracks");
    }
  },
  printT: () => {
    for (const track in library.tracks) {
      console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")");
    }
  },
  printP1: playlistId => {
    let i = 0;
    console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
    for (const track in library.tracks) {
      if (library.tracks[track].id === library.playlists[playlistId].tracks[i]) {
        console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")");
      }
      i++;
    }
  },
  addTtoP: (trackId, playlistId) => {
    library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks);
  },
  addT: (name, artist, album) => {
    const newTrackId = `t0${Object.keys(library.tracks).length + 1}`;
    library.tracks[newTrackId] = { id: newTrackId, name: name, artist: artist, album: album };
    console.log(library.tracks);
  },
  addP: (name) => {
    const newPlaylistId = `p0${Object.keys(library.playlists).length + 1}`;
    library.playlists[newPlaylistId] = { id: newPlaylistId, name: name};
    console.log(library.playlists);
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const playlist in library.playlists) {
    console.log(library.playlists[playlist].id + ": " + library.playlists[playlist].name + " - " + library.playlists[playlist].tracks.length + " tracks");
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (const track in library.tracks) {
    console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")");
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let i = 0;
  console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
  for (const track in library.tracks) {
    if (library.tracks[track].id === library.playlists[playlistId].tracks[i]) {
      console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")");
    }
    i++;
  }
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newTrackId = `t0${Object.keys(library.tracks).length + 1}`;
  library.tracks[newTrackId] = { id: newTrackId, name: name, artist: artist, album: album };
  console.log(library.tracks);
};


// adds a playlist to the library
const addPlaylist = function(name) {
  const newPlaylistId = `p0${Object.keys(library.playlists).length + 1}`;
  library.playlists[newPlaylistId] = { id: newPlaylistId, name: name};
  console.log(library.playlists);
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};
// printPlaylists()
library.print();

