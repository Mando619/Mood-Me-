
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


// search button function
$("#search").on("click", function(){
    console.log("ola");
});

// on click function for generating a music playlist.
$(".emotionButton").on("click", function(event) {
  console.log("hi")

  let arrayIndex = Math.floor((Math.random() * 20));

  let emotion = event.target.id;

  var settings = {
    "url": "https://api.spotify.com/v1/search?type=playlist&q=" + emotion,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer BQBPa04mtFoPcz11Bbf3uqy7QtCnKUr5-6v_pHZ0hta-b9VoabHEoPHFNSUyv5Qusu3P7NCj4w-jvskmpkENCxx0_BMVnNasEc430srQ-mCZ2Vd5leyxTPEOEivvzUAcxujiY2Zq6wiUmMrwAOXZMOM4Wdb7TMSc4zJEu-w7UIYmHIDo-DFd97VqFaJwsEp6XwiBzu-PamuozE2LR6piB4GfsR9srOz3ekvrfgD9pwF1S__9Wz0OLddHGDJ9MQMc93zonE_YrjFPEg4t"
    },
  };

  $.ajax(settings).done(function (response) {
    //console.log(response.playlists.items);
    //console.log(arrayIndex)
    let playlist = response.playlists.items[arrayIndex];
   // console.log(playlist.external_urls.spotify);
    let iframeURL = playlist.external_urls.spotify.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/');

   // console.log(iframeURL)

    $("#playlist").attr("src", iframeURL);

  });

  let genreCode = event.target.attributes[1].value;
  //console.log(event)
  //console.log(genreCode)

  // ajax call for the movie database. 
  var settings = {
  "url": "https://api.themoviedb.org/3/discover/movie?api_key=7145a0d33a1aba5125e1cf5e53f5b9d1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreCode,
  "method": "GET",
  "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    //console.log(response.results[arrayIndex].original_title);
    console.log(response.results[arrayIndex])
    let movieTitle = response.results[arrayIndex].original_title;
    $('#movieTitle').text(movieTitle);

    let movieID = response.results[arrayIndex].id;

    var settings = {
  "url": "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=7145a0d33a1aba5125e1cf5e53f5b9d1&language=en-US",
  "method": "GET",
  "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
  console.log(response);

  let videoID = response.results[0].key;

  console.log(videoID);

  let trailerShow = "https://www.youtube.com/embed/" + videoID;
  $("#trailers").attr("src", trailerShow);
  });
  });

  })


