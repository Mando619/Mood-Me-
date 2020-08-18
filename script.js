$(".emotionButton").on("click", function(event) {
  console.log("hi")

  let arrayIndex = Math.floor((Math.random() * 20));



  let emotion = event.target.id;

  var settings = {
    "url": "https://api.spotify.com/v1/search?type=playlist&q=" + emotion,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer BQCMEfXtEJaaC8xbX9mEReEqE566URtsaUOGwkEAZeCosD9RDXfjiBK47DieN6sSSn7Ni5RAIiB22RWAdpvRe9NlOuLW0xb1IjBaXFuOqHDuZE_843rdE4BD-ruBJZh4JuZS8Wb2iggbN3iHnzxRWZ-GHFnsfe3901ITolxSRt4kuH-tk_ym0xolQ-F-M-HDf72KN60VsZCn-ml4upHL_Pw2QjRK875mBZshClGdv_qFkZEZ99jAYM5RlzMxhZDgbbrtDvbQ8IdGseca"
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
  });``

  })