/* global $ */

// BELOW Update the songs array with four of your favorites songs.

var ClockStrikes = {
  songName: "Clock Strikes",
  artist: "ONE OK ROCK",
  songImage: "https://i.ytimg.com/vi/KQMqiQNExek/maxresdefault.jpg",
  songLength: "3:58",
  songLink: "https://www.youtube.com/embed/6YZlFdTIdzM"
};

var NoTitle = {
  songName: "No Title",
  artist: "Reol",
  songImage: "https://i1.sndcdn.com/artworks-000294625935-epic2f-t500x500.jpg",
  songLength: "4:06",
  songLink: "https://www.youtube.com/embed/LfephiFN76E"
};

var CryOut = {
  songName: "Cry Out",
  artist: "ONE OK ROCK",
  songImage:
    "https://images.genius.com/d2d71b191fc19637d06835315dec9ebe.500x445x1.jpg",
  songLength: "3:52",
  songLink: "https://www.youtube.com/embed/JWSRqWpWPzE"
};

var KisetsuwaTsugitsugiShindeiku = {
  songName: "Kisetsu wa Tsugitsugi Shindeiku",
  artist: "amazarashi",
  songImage: "https://i.scdn.co/image/ab67616d0000b2736e4097c323bcf34944870757",
  songLength: "5:55",
  songLink: "https://www.youtube.com/embed/Upvuj6GhAa4"
};

var Ignite = {
  songName: "Ignite",
  artist: "Aoi Eir",
  songImage: "https://i1.sndcdn.com/artworks-000094274643-85cqo7-t500x500.jpg",
  songLength: "4:07",
  songLink: "https://www.youtube.com/embed/mTCESSzPZSw"
};

var allSongs = [
  //Placeholder Songs
  /*
  ClockStrikes,
  NoTitle,
  CryOut,
  KisetsuwaTsugitsugiShindeiku,
  Ignite
  */
];

function displaySongInfo() {
  //clears song stored
  $("#songs").text("");
  $("#artists").text("");
  $("#images").text("");
  $("#lengths").text("");
  $("#links").text("");

  for (var i = 0; i < allSongs.length; i++) {
    $("#songs").append("<p>" + allSongs[i].songName + "</p>");
    $("#artists").append("<p>" + allSongs[i].artist + "</p>");
    $("#images").append("<img src='" + allSongs[i].songImage + "'>");
    $("#lengths").append("<p>" + allSongs[i].songLength + "</p>");
    $("#links").append(
      "<iframe height='120' src ='" +
        allSongs[i].songLink +
        "'>" +
        "</iframe>" +
        "<br>"
    );
  }
}

// Make sure they match the same order as your array above

//retrieves data from local storages

function retrieveAllInfo() {
  var retrievedSongs = localStorage.getItem("songsStorage");
  console.log(retrievedSongs);
  allSongs = JSON.parse(retrievedSongs);
}

function clearSongDisplay() {
  $("#song").text("");
  // Use jQuery to empty all of the remaining divs
  $("#artist").text("");
  $("#image").text("");
  $("#length").text("");
  $("#link").text("");
}

function addSongInfo() {
  // BELOW write the code to add new items to each of the arrays.
  let songTitleInput = $("#song").val();
  let songArtistInput = $("#artist").val();
  let imageInput = $("#image").val();
  let songLengthInput = $("#length").val();
  let songLinkInput = $("#link").val();
  let youtubeEmbedLink =
    "https://www.youtube.com/embed/" + songLinkInput.slice(32);
  //songLink.push("https://www.youtube.com/embed/" + youtubeEmbedLink);
  storeAllInfo();

  var songName = {
    songName: songTitleInput,
    artist: songArtistInput,
    songImage: imageInput,
    songLength: songLengthInput,
    songLink: youtubeEmbedLink
  };

  allSongs.push(songName);
}

function storeAllInfo() {
  //store data locally
  localStorage.setItem("songsStorage", JSON.stringify(allSongs));
}

//adds song
$("#add").click(function() {
  addSongInfo();
  refreshSongs();
});

function refreshSongs() {
  //gets stored songs from local -> replaces whats there into local -> gets new stored songs from updated local -> clears display (text only), displays songs from local
  storeAllInfo();
  retrieveAllInfo();
  clearSongDisplay();
  displaySongInfo();
}
//clears song storage, wipes all stored
$("#clear").click(function() {
  allSongs = [];
  localStorage.setItem("songsStorage", JSON.stringify(allSongs));
  displaySongInfo();
});

//runs to make page at beginning
  retrieveAllInfo();
  displaySongInfo();
  

/*
//picks a random number out of the number of available songs in songs
function pickRandomSong() {
  let arrayCount = songs.length;
  console.log(arrayCount);
  let randomNum = Math.floor(Math.random() * arrayCount);
  console.log(randomNum);
}
*/
